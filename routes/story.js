var data = require('../images.json');
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
exports.renderSlideshow = function(req, res) {
	console.log(data);

	/*var images = localStorage.getItem('images');
	if( images.length > 0 )
	{
		for( var i = 0; i < images.length; i++ )
		{
			var currImage = images[i];
			var idN = "image"+i;
			var newPhoto = {
			"id": idN,
			"image": currImage,
			"thumb": "thumb-01.jpg"
			}
			data["images"].push(newPhoto);
		}
	}
	else //If no images, add default image
	{
		var idN = "image"+0;
		var newPhoto = {
		"id": idN,
		"image": "http://lorempixel.com/400/400/people",
		"thumb": "thumb-01.jpg"
		}
		data["images"].push(newPhoto);
	}*/
	res.render('story',

	{
		images: [
		{
			"id": "one",
			"image": "01.jpg",
			"thumb": "thumb-01.jpg",
			"description":"description of image 1"
		},
		{
			"id": "two",
			"image": "02.jpg",
			"thumb": "thumb-02.jpg",
			"description":"description of image 2"
		},
		{
			"id": "three",
			"image": "03.jpg",
			"thumb": "thumb-03.jpg",
			"description":"description of image 3"
		},
		{
			"id": "four",
			"image": "04.jpg",
			"thumb": "thumb-04.jpg",
			"description":"description of image 4"
		},
		{
			"id": "five",
			"image": "05.jpg",
			"thumb": "thumb-05.jpg",
			"description":"description of image 5"
		},
		{
			"id": "six",
			"image": "06.jpg",
			"thumb": "thumb-06.jpg",
			"description":"description of image 6"
		},
		{
			"id": "seven",
			"image": "07.jpg",
			"thumb": "thumb-07.jpg",
			"description":"description of image 7"
		},
		{
			"id": "eight",
			"image": "08.jpg",
			"thumb": "thumb-08.jpg",
			"description":"description of image 8"
		},
		{
			"id": "nine",
			"image": "09.jpg",
			"thumb": "thumb-09.jpg",
			"description":"description of image 9"
		},
		{
			"id": "ten",
			"image": "10.jpg",
			"thumb": "thumb-10.jpg",
			"description":"description of image 10"
		},
		{
			"id": "eleven",
			"image": "11.jpg",
			"thumb": "thumb-11.jpg",
			"description":"description of image 11"
		},
		{
			"id": "twelve",
			"image": "12.jpg",
			"thumb": "thumb-12.jpg",
			"description":"description of image 12"
		},
		]
	});
}
