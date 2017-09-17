var grunt = require('grunt');
grunt.registerTask('world', 'world task description', function(){
  console.log('hello world');
});
grunt.registerTask('hello', 'say hello', function(name){
  if(!name || !name.length)
    grunt.warn('you need to provide a name.');
  console.log('hello ' + name);
});
grunt.registerTask('default', ['world', 'hello:Sebastian']);

// need to figure out how to copy scripts and css from node_modules to app directory and update the index.html file with new paths.