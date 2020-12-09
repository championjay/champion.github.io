function serv(){
    document.getElementById("service").style.display="block";
    document.getElementById("service").style.zIndex="3";
    document.getElementById("work").style.zIndex="2";
    document.getElementById("about").style.zIndex="1";
 }
function work(){
    document.getElementById("work").style.display="block";
    document.getElementById("work").style.zIndex="3";
    document.getElementById("about").style.zIndex="2";
    document.getElementById("service").style.zIndex="1";
    }

    function about(){
     
        document.getElementById("about").style.display="block";
        document.getElementById("about").style.zIndex="3";
        document.getElementById("work").style.zIndex="2";
        document.getElementById("service").style.zIndex="1";
        }

        function web(){
            document.getElementById("web").style.display="block";
            document.getElementById("graphics").style.display="none";
        }

        function graphic(){
            document.getElementById("graphics").style.display="block";
            document.getElementById("web").style.display="none";
        }