module.exports = function(grunt) {

  grunt.initConfig({
    uglify:{
      target:{
        files:[
          {
            'angular/all.min.js': ['angular/**/*.js']
          }
        ]
      }
    },
    cssmin:{
      target:{
        files:[
          {
            'css/style.min.css': ['css/style.css']
          }
        ]
      }
    },
    clean: ["angular/all.min.js","css/style.min.css"]
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default',['clean','uglify','cssmin']);
};