module.exports = function(grunt) {

  grunt.initConfig({
    concat:{
      options:{
        stripBanners: {
          options:{
            block: true,
            line: true
          }
        }
      },
      target:{
        src: ['angular/**/*.js'],
        dest: 'angular/concat.js'
      }
    },
    uglify:{
      target:{
        files:[
          {
            expand: true,                   // Enable dynamic expansion.
            cwd: 'angular/',                // Src matches are relative to this path.
            src: ['concat.js'],             // Actual pattern(s) to match.
            dest: 'angular/',               // Destination path prefix.
            ext: '.min.js',                 // Dest filepaths will have this extension.
            extDot: 'first'                 // Extensions in filenames begin after the first dot
          }
        ]
      }
    },
    clean:{
      min:["angular/**/*.min.js"],
      concat:["angular/concat.js"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('min',['clean:min','concat','uglify','clean:concat']);
};