
      function downloadAudio(buttonElement) {
        
        var buttonParent = buttonElement.closest('#button2');
        console.log(buttonParent);
        var audioElement = buttonParent.previousElementSibling;
        console.log(audioElement);
        // var audio = document.getElementById('myAudio');
        var url = audioElement.src;
        console.log(url);

         var myArray = url.split("/");
         console.log(myArray[5]);

        var a = document.createElement('a');
        a.href = url;
        a.download = myArray[5];
        a.click();

        

      }


