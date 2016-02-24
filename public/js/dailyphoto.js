jQuery(document).ready(function ($) {
	$(stopButton).hide();
});

function capture(video, canvas, image, captureButton, stopButton, snapshotButton) {
	var ctx = canvas.getContext('2d');
	var localMediaStream = null;
	var track = null;

	captureButton.disabled = true;
	stopButton.disabled = false;
	snapshotButton.disabled = false;

	stopButton.onclick = function () {
		stop(video);
	};

	window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
						  navigator.mozGetUserMedia || navigator.msGetUserMedia;

	var constraints = {
		video: true
	}

	var successCallback = function(mediaStream) {
		video.src = (window.URL && window.URL.createObjectURL(mediaStream)) || mediaStream;
		video.addEventListener("loadedmetadata", function(e) {
			video.style.display = "block";
			localMediaStream = mediaStream;
			track = localMediaStream.getTracks()[0];
			snapshotButton.onclick = function(event) {
				takePhoto();
				//Added code for saving image
				var dataURL = canvas.toDataURL("image/png");
				//console.log(dataURL);
				//window.open(dataURL, "toDataURL() image", "width=600, height=200");
				//var ajax = new XMLHttpRequest();
				//ajax.open("POST",'index.php',false);
				//ajax.setRequestHeader('Content-Type', 'application/upload');
				//ajax.send(dataURL);


				//Confirmation for photo
				notie.confirm('Do you want to use this as your Photo of the Day?', 'Yes', 'Cancel', function()
                {
                	var currentDate = new Date();
					var dd = currentDate.getDate();
					var mm = currentDate.getMonth(); //January is 0!
					var yyyy = currentDate.getFullYear();

					var images;

					if(localStorage.getItem('images')===null)
					{
						images = [];
					}
					else
					{
						images = JSON.parse(localStorage.getItem('images'));
					}

                	//dataURL.replace(/^data:image\/(png|jpg);base64,/,"");
					//localStorage.setItem('image2', dataURL);
					if(localStorage.getItem('images')===null)
					{
						var newPhoto = new Object();
						newPhoto["id"] = "image"+0;
						newPhoto["image"] = dataURL;
						newPhoto["thumb"] = "thumb-01.jpg";
						newPhoto["day"] = dd;
						newPhoto["month"] = mm;
						newPhoto["year"] = yyyy;
						newPhoto["description"] = "";
						//var newImage = new Image();
						//newImage.src = dataURL;
						images.push(newPhoto);
						//console.log(JSON.stringify(images));
						localStorage.setItem('images', JSON.stringify(images));
					}
					else if((dd !== images[images.length-1]["day"]) && (mm !== images[images.length-1]["month"]) && (yyyy !== images[images.length-1]["year"]))
					{
						var newPhoto = new Object();
						newPhoto["id"] = "image"+(images.length);
						newPhoto["image"] = dataURL;
						newPhoto["thumb"] = "thumb-01.jpg";
						newPhoto["day"] = dd;
						newPhoto["month"] = mm;
						newPhoto["year"] = yyyy;
						newPhoto["description"] = "";
						//console.log(images.src);
						//var newImage = new Image();
						//newImage.src = dataURL;
						images.push(newPhoto);
						//console.log(images);
						//console.log(JSON.stringify(images));
						localStorage.setItem('images', JSON.stringify(images));
					}
					else
					{
						notie.alert(3, "<b>Error!</b><br> You've already taken your daily photo for today!<br>Come back tomorrow!" , 3);
						console.log("DENIED");
					}
					var data1;
			      	/*$.getJSON("images.json", function(data)
			      	{
			       	 	//console.log('My JSON data: ', data);
			        	//$('#myData').text(JSON.stringify(data))



			        	console.log(data);
						var idN = "image"+data.images.length++;

						var newPhoto = new Object();
						newPhoto["id"] = idN;
						newPhoto["image"] = "data:image/png;base64," + dataURL;
						newPhoto["thumb"] = "thumb-01.jpg";
						newPhoto["date"] = Date();
						newPhoto["description"] = "";

						data["images"].push(newPhoto);
						console.log(data);
			      	});*/

					//COOKIE ATTEMPT
					/*if( typeof Cookies.getJSON('images') === 'undefined')
					{
						var imagesJSON = {
								"id": "image" + 0,
								"image": dataURL, //PROBLEM: dataURL too big?
								"thumb": "thumb-01.jpg"
						}
						Cookies.set('images', imagesJSON);
						console.log(Cookies.getJSON());
					}
					else
					{
						var imagesJSON = Cookies.getJSON('images');
						var newImage = {
							"id": "image"+(++imagesJSON.images.length),
							"image": dataURL,
							"thumb": "thumb-01.jpg"
						}
						imagesJSON.push(newImage);
						console.log("UPDATED NE: " + imagesJSON);
						Cookies.set('images', imagesJSON);
					}*/

                	notie.alert(1, 'Good choice!', 2);
                });
			}
		});
	};

	var errorCallback = function() {
		console.log("failure to get media");
	};

	var takePhoto = function () {
		ctx.drawImage(video, 0, 0, 320, 240);
		canvas.style.display = "block";
		showImage();
	};

	var showImage = function () {
		image.src = canvas.toDataURL('image/webp');
		image.style.display = "none";
	};

	var stop = function () {
		if (localMediaStream) {
			track.stop(); /* TODO: it doesn't work in Opera Mobile 12 */
		}

		captureButton.disabled = false;
		stopButton.disabled = true;
		snapshotButton.disabled = true;
		$(captureButton).show();
		$(stopButton).hide();
	};

	if (navigator.getUserMedia) {
		navigator.getUserMedia(constraints, successCallback, errorCallback);
	} else {
		console.log("getUserMedia not supported");
	}
}

function getConfirmation(){
   var retVal = confirm("Do you want to use this photo for your Photo of the Day?");
   if( retVal == true ){
      //document.write ("User wants to use photo!");
      return true;
   }
   else{
      //document.write ("User does not want to use photo!");
      return false;
   }
}

function upload(file) {
  var form = new FormData(),
      xhr = new XMLHttpRequest();

  form.append('image', file);
  xhr.open('post', 'server.php', true);
  xhr.send(form);
}

function init() {
	var video = document.querySelector('video#getUserMedia');
	var canvas = document.querySelector('#canvas');
	var snapshot = document.querySelector('#snapshot');
	var captureButton = document.querySelector('#captureButton');
	var stopButton = document.querySelector('#stopButton');
	var snapshotButton = document.querySelector('#snapshotButton');

	captureButton.onclick = function () {
		$(captureButton).hide();
		$(stopButton).show();
		capture(video, canvas, snapshot, captureButton, stopButton, snapshotButton);
	};
}
