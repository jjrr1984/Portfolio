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
    clean: ["angular/all.min.js"]
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default',['clean','uglify']);
};