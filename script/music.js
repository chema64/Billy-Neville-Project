
      function downloadAudio() {
        var audio = document.getElementById('myAudio');
        var url = audio.src;
        console.log(url);

         var myArray = url.split("/");
         console.log(myArray[5]);

        var a = document.createElement('a');
        a.href = url;
        a.download = myArray[5];
        a.click();

        

      }

      console.log("test");
