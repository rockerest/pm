module.exports = function( grunt ){
    var config = require( "load-grunt-configs" )( grunt, {
        "config": {
            "src": "conf/grunt/*.*"
        }
    } );

    require( "load-grunt-tasks" )( grunt );
    grunt.initConfig( config );

    // Custom tasks
    grunt.registerTask( "clean", "Wipe the build directory", function(){
        grunt.file.delete( "./build" );
        grunt.file.delete( "./vendor" );
    } );

    grunt.registerTask( "prepare", "Prepare directory structure for anything necessary", function(){
        grunt.task.run( [ "clean" ] );
        grunt.file.mkdir( "./build" );
        grunt.file.mkdir( "./vendor" );
    } );

    grunt.registerTask( "style", "Compile the SASS", function(){
        grunt.task.run( [ "sass:dev", "cssmin", "notify:sass" ] );
    } );

    grunt.registerTask( "code", "Compile the code", function(){
        grunt.task.run( [ "babel", "browserify", "notify:compile" ] );
    } );

    grunt.registerTask( "build", "Do a system build", function(){
        grunt.task.run( [
            "style",
            "code",
            "copy:i18n",
            "copy:images",
            "copy:vendor",
            "uglify"
        ] );
    } );

    grunt.registerTask( "setup", [ "prepare" ] );
    grunt.registerTask( "default", [ "build", "watch" ] );
};
