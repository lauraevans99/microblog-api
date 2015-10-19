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
  	$("#submit").on("submit", function(e) {
      // $.post("/api/newPost", $(this).serialize(), function(response){
      //   var newPost = response;
      //   var postString = makeHTMLString(newPost);
      // });

      e.preventDefault();
      var postId = $(e).data().id;
      $.ajax({
        url: '/api/newPost/' + postId,
        type: 'POST',
        data: $(e).serialize(),
        success: function(response) {
          console.log("post to database worked");
          // once successful, remove food from the DOM
          //$(e).closest('li').remove();
        }
      });

  		// var input = $("#input").val();
    //   var listHtml = "<li class='list-group-item'>" + input + "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></li>";
  		// $("ul").append(listHtml);
    //   numPosts++;
    //   that.updateCounter();
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