const outScreen = document.getElementById("out");
        function display(num){
        outScreen.value += num;
       }

        function calculator(){
            try{
                outScreen.value = eval(outScreen.value)
            }
            catch(error){
                console.log(error)
            }
        }

        function clear(event){
            outScreen.value = event.outScreen.value.remove();
        }

        
        function del(){
            outScreen.value = outScreen.value.slice(0,-1)
        }