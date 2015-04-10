module.exports = function(grunt) {

  grunt.initConfig({
    uglify:{
      options:{
        mangle: false
      },
      target:{
        files:[
          {
            expand: true,                   // Enable dynamic expansion.
            cwd: 'angular/',                // Src matches are relative to this path.
            src: ['**/*.js'],             // Actual pattern(s) to match.
            dest: 'angular/',               // Destination path prefix.
            ext: '.min.js',                 // Dest filepaths will have this extension.
            extDot: 'first'                 // Extensions in filenames begin after the first dot
          }
        ]
      }
    },
    clean: ["angular/**/*.min.js"]
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default',['clean','uglify']);
};