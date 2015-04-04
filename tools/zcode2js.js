function _onFileUpload() {
  if ($("#file-upload").get(0).files) {
    //var data = $("#file-upload").get(0).files[0].getAsBinary();
    var file = $("#file-upload").get(0).files[0];
    var reader = new FileReader(),
        progressNode = document.getElementById("my-progress");

    reader.onprogress = function(event) {
      if (event.lengthComputable) {
        progressNode.max = event.total;
        progressNode.value = event.loaded;
      }
    };

    reader.onloadend = function(event) {
      var contents = event.target.result,
          error    = event.target.error;

      if (error != null) {
        console.error("File could not be read! Code " + error.code);
      } else {
        progressNode.max = 1;
        progressNode.value = 1;
        console.log("Contents: " + contents);
      }

      var storyBytes = [];
      for (var i = 0; i < event.target.result.length; i++) {
        storyBytes.push(event.target.result.charCodeAt(i));
      }
      var encode2 = encode(storyBytes);
      var storyString = ("data:text/javascript,processBase64Zcode('" + encode2 + "');");
      $("#js-file-download").attr("href", storyString);
      $("#post-file-upload").fadeIn();
    };

    reader.readAsBinaryString(file);
  } else {
    $("#post-file-upload-failed").fadeIn();
  }
}

function encode(data)
{
  var str = "";
  for (var i = 0; i < data.length; i++)
    str += String.fromCharCode(data[i]);

  return btoa(str).split(/(.{75})/).join("\n").replace(/\n+/g, "\n").trim();
}

function _onUrlEntry() {
  if (this.value) {
    $("#post-url-entry").fadeIn();
    var lastSlash = window.location.href.lastIndexOf("/");
    var baseUrl = window.location.href.slice(0, lastSlash);
    var finalUrl = baseUrl + "/parchment.html?story=" + escape(this.value);
    $("#play-url").attr("href", finalUrl);
    $("#play-url").text(finalUrl);
  } else {
    $("#post-url-entry").fadeOut();
  }
}

function _onStartup() {
  $("#file-upload").attr("value", "");
  $("#url-entry").attr("value", "");
  $("#file-upload").change(_onFileUpload);
  $("#url-entry").keyup(_onUrlEntry);
}

$(document).ready(_onStartup);
