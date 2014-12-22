module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // удаляем папки/файлы
    clean: {
      build: ['build']
    },

    // копируем файлы для продакшина
    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            'fonts/**',
            'img/**',
            '*.html'
          ],
          dest: 'build'
        }]
      }
    },

    // компилируем компасс (плохо компилирует шрифты и контент псевдоэлементов, а prepros хорошо)
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    // проставляем префиксы
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9', 'ie 10']
      },
      style: {
        src: 'build/css/main.css'
      }
    },

    // организуем медиазапросы
    cmq: {
      style: {
        files: {
          'build/css/main.css': ['build/css/main.css']
        }
      }
    },

    // организуем css по определенным правилам (см. .csscomb.json)
    csscomb: {
      style: {
        files: {
          'build/css/main.css': ['build/css/main.css']
        }
      }
    },

    // минимизируем css
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: 'gzip'
        },
        files: {
          'build/css/main.min.css': ['build/css/main.css']
        }
      }
    },

    // оптимизируем графику (проблема с jpg в win7-8)
    imagemin: {
      build: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ['build/img/**/*.{png,gif,svg}']
        }]
      }
    },

    // минимизируем html
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        caseSensitive: true,
        keepClosingSlash: true
      },
      build: {
        files: {
          'build/index.html': 'build/index.html'
        }
      }
    },

    // объединяем несколько файлов в один
    concat: {
      dist: {
        src: [
          'js/lib/*.js',
          'js/main.js'
        ],
        dest: 'build/js/main.js',
      }
    },

    // минимизируем js
    uglify: {
      build: {
        src: 'build/js/main.js',
        dest: 'build/js/main.min.js'
      }
    },

    // отслеживаем изменения
    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false
        },
      },
      css: {
        files: ['sass/*.scss', 'sass/*/*.scss'],
        tasks: ['compass'],
        options: {
          spawn: false
        }
      }
    },

    


  });


  grunt.registerTask('default', [
    'clean',
    'copy',
    'compass',
    'autoprefixer',
    'cmq',
    'csscomb',
    'cssmin',
    'imagemin',
    'htmlmin',
    'concat',
    'uglify'
  ]);

};