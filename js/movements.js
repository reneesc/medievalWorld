var fightPosition="IMAGES_GUTS/GUTS_battle_stance.gif";
var runningPosition="IMAGES_GUTS/GUTS_running_forward.gif";
var hurtstance="IMAGES_GUTS/GUTS_hurt_stance.gif";

function sleep(ms) {
            setTimeout(function(){
                document.getElementById("fightTechnique").src=runningPosition;
            }, ms);
}        

        
        document.onkeypress = function(a){

            var key=String.fromCharCode(a.which);
        
           
            if(a.key=="Enter"){
                document.getElementById("fightTechnique").src=runningPosition;
                
                document.getElementById("splash").hidden="true";
                document.getElementById("splash_1").hidden="true";
                document.getElementById("splash_2").hidden="true";
                document.getElementById("fightTechnique").removeAttribute("hidden");
                
            }
            
            

        }

