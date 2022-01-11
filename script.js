let counts=setInterval(updated);
        let upto=9997429;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto===10000000)
            {
                clearInterval(counts);
            }
        }