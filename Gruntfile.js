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
    htmlmin:{
      options:{
        removeComments: true,
        collapseWhitespace: true
      },
      target:{
        files:[
          {
            expand: true,     
            cwd: 'views/', 
            src: ['**/*.html'],
            dest: 'views/',
            ext: '.min.html',
            extDot: 'first'
          }
        ]
      }
    },
    clean: ["angular/all.min.js","css/style.min.css","views/**/*.min.html"]
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default',['clean','uglify','cssmin','htmlmin']);
};