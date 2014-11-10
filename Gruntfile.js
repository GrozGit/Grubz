﻿module.exports = function (grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/js/<%= pkg.name %>.js',
                dest: 'public/<%= pkg.name %>.min.js'
            }
        },

        sass: {
            // Task
            dist: {
                // Target
                options: {
                    // Target options
                    style: 'compressed'
                },
                files: {
                    // Dictionary of files
                    'public/main.css': 'client/scss/main.scss' // 'destination': 'source'
                }
            }
        }
    });
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass']);

};