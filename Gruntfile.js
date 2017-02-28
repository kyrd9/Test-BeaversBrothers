module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-autoprefixer');

   // Configuration
     grunt.initConfig({
     //pass in options to plugins, references to files etc
     concat:{
       js:{
         src:['app/lib/*.js', 'app/*.js'],
         dest: 'build/scripts.js'
       },
       css:{
         src:['content/css/reset.css', 'content/css/styles.css'],
         dest: 'build/styles.css'
       }
     },


     sass:{
       build:{
         files:[{
            src:'content/sass/styles.scss',
            dest: 'content/css/styles.css'
         }]
       }
     },

     uglify: {
       build: {
         files:[{
            src:'build/scripts.js',
            dest: 'build/scripts.js'
         }]
       }
     },

     autoprefixer: {
   options: {
     // Task-specific options go here.
     browsers: ['last 10 versions', 'ie 8', 'ie 9']
   },
  single_file: {
     // Target-specific file lists and/or options go here.
     src:'build/styles.css',
     dest: 'build/styles.css'
   },
 },


        });
//Load plugins
grunt.loadNpmTasks('grunt-contrib-concat')
grunt.loadNpmTasks('grunt-sass')
grunt.loadNpmTasks('grunt-contrib-uglify')

//Register tasks
  grunt.registerTask('concat-js', ['concat:js'])
  grunt.registerTask('concat-css', ['concat:css'])
};
