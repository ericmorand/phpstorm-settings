module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        build: grunt.file.readJSON('build.json'),
        name: '<%= pkg.name + "_settings" %>',
        version: grunt.option('pkg.version') || '<%= pkg.version %>',
        compress: {
            default: {
                options: {
                    archive: '<%= build.path.dist %>/<%= name %>_<%= version %>.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'settings',
                        src: [
                            '**'
                        ]
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('build', [
        'compress'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};