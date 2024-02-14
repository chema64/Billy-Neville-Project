
      function downloadAudio() {
        var audio = document.getElementById('myAudio');
        var url = audio.src;
        console.log(url);

         var myArray = url.split("/");
         console.log(myArray[7]);

        var a = document.createElement('a');
         a.href = url;
         a.download = "t-rex-roar";
        a.click();

        

      }

      console.log("test");
