import $ from "jquery";
import ribcage from "backbone-ribcage";

window.pm = {
    "channels": {},
    "layouts": {},
    "storage": {}
};

function run(){
    console.log( "Started" );
    console.log( $ );
    console.log( ribcage );
}

run();
