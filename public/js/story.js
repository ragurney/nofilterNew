var jssor_1_slider;
jQuery(document).ready(function ($) {

    $('#noDescription').hide();
    $('#editButton').hide();
    $('#commentSection').hide();

    generateSlides();
    var jssor_1_SlideshowTransitions = [
      {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
    ];

    var jssor_1_options = {
      $AutoPlay: false,
      $SlideDuration: 600,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_1_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $Cols: 10,
        $SpacingX: 8,
        $SpacingY: 8,
        $Align: 360
      }
    };

    jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);



    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 800);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});
function play() {
    console.log("play clicked");
    jssor_1_slider.$Play();
}

function pause() {
    console.log("pause clicked");
    jssor_1_slider.$Pause();
}

function edit() {
  $('#commentSection').show();
  $('#description').hide();
  $('#noDescription').hide();
  $('#editButton').hide();

}

// adding comments to each image

// call the function when the page loads
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $('#commentSection').hide();
  $('#description').hide();
  $('#noDescription').hide();
  $('#editButton').hide();
  $('a.details').click(showDescription);
  $('#commentSubmit').click(submit);
}

// popup description
function showDescription(e) {
  var imageArray = JSON.parse(localStorage.getItem('images'));

  e.preventDefault();
  $('#description').toggle();
  $('#editButton').toggle();

  var containingProject = $(this).closest(".details");
  var description = $(containingProject).find("#description");
  var imageId = $(this).attr('id');
  var idNumber = imageId.substring(17);

  if (imageArray[idNumber].description == 0) {
    $('#noDescription').show();
  }
  else {
    $("#description").text(imageArray[idNumber].description);
  }


  /*$.getJSON("images.json", function(data) {
    console.log(data);
    $("#description").html(data.images[0].description);
    // data is a JavaScript object now. Handle it as such
});*/

    /*if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p></p></div>");
    }*/
}

//submit edits
function submit(e) {
  e.preventDefault();
  var imageArray = JSON.parse(localStorage.getItem('images'));
  var imageId = jssor_1_slider.$CurrentIndex();
  //var idNumber = imageId.substring(17);

  console.log("clicked submit");

/*  var newTitle = $('#editTitle').val();
  $('#title').text(newTitle);*/

  var newDescription = $('#editDescription').val();
  console.log("before");
  console.log(imageArray[imageId].description);
  imageArray[imageId].description = newDescription;
  $('#description').text(imageArray[imageId].description);
  console.log(imageArray[imageId].description);

  $('#commentSection').hide();
  $('#description').show();

  localStorage.setItem('images', JSON.stringify(imageArray));
}

function arrows(){
  $('#description').hide();
  $('#editButton').hide();
}

function generateSlides()
{
    var imageArray = JSON.parse(localStorage.getItem('images'));
    console.log(imageArray.length);
    console.log(imageArray[0]);
    for( var i = 0; i < imageArray.length; i++ )
    {
        var new_div = document.createElement('div');
        new_div.setAttribute('data-p',144.50);
        new_div.setAttribute('class',"imageContainer");
        new_div.style='display: none;';
        document.getElementById("slides").appendChild(new_div);

        var image = document.createElement('img');
        image.id = imageArray[i]["id"];
        image.setAttribute('data-u',"image");
        image.setAttribute('class', "imageClass");
        image.src = imageArray[i]["image"];
        new_div.appendChild(image);

        var thumb = document.createElement('img');
        thumb.id = 'thumb' + i;
        thumb.setAttribute('data-u',"thumb");
        thumb.src = 'img/slideshow_img/thumb-01.jpg';
        new_div.appendChild(thumb);

        var details = document.createElement('a');
        details.setAttribute('class', "details");
        details.id = 'detailsImage' + image.id;
        $('#detailsImage' + image.id).text("View Details");
        new_div.appendChild(details);
    }

}
