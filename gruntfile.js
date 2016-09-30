module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'src/temp/script.main.js'
      }
    },
    uglify: {
      build: {
        src: 'src/temp/script.main.js',
        dest: 'dest/js/script.main.min.js'
      }
    },
    cssmin: {
      target: {
        files: {
        'dest/css/style.min.css' : ['src/css/*.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
