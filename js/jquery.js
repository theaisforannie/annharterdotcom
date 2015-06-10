var main = function () {
	console.log("foo bar baz");

	// when the a element (in this case, there is only one
	// on the page) is clicked, two things happen:
	// 1) it doesn't actually go to the page -- default behavior
	// 		is prevented
	// 2) an alert pops up! how annoying!
	$("a").click(function (event) {
		event.preventDefault();
		alert("foo bar");
	});

	// added a class to the a element
	// then set the attributes of that class below
	$("a").addClass("butts");

	// this is the attr method as "setter"
	// it sets href to my blog (as opposed to my home page
	// which is how it's hardcoded) and gives the
	// title text "stabby"
	$(".butts").attr({
		"href" : "http://blog.annharter.com",
		"title" : "stabby"
	});

	// this conditional checks to see if the element, div .foo,
	// has anything in it. if length is zero, it returns false!
	if ($("div .foo").length) {
		console.log("div exists");
	} else {
		console.log("div does not exist");
	};

	// changes h1 based on user input in the prompt
	var words = prompt("How shall we greet you?");
	$( "h1" ).html( words );
	console.log($("h1").html());

};


// the ready function runs the code when the page
// has finished loading!
// this is why you put the main function there!
// omg!
$(document).ready(main);