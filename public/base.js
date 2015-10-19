console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	var app = new App();
	app.addPost();
  app.deletePost();

});

  function App(){}

  var numPosts = 0;

  App.prototype.addPost = function () {
    var that = this;
  	$("#submit").on("click", function(e) {
  		var input = $("#input").val();
      var listHtml = "<li class='list-group-item'>" + input + "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></li>";
  		$("ul").append(listHtml);
      numPosts++;
      that.updateCounter();
  	});
  };

  App.prototype.deletePost = function () {
    var that = this;
  	$("ul").on("click", function(e) {
  		this.remove();
      numPosts--;
      that.updateCounter();
  	});
  };

  App.prototype.updateCounter = function () {
    $("#counter").text("Total number of posts: " + numPosts);
  };