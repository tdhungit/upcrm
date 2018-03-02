/************************************************************************
 * This file is part of EspoCRM.
 *
 * EspoCRM - Open Source CRM application.
 * Copyright (C) 2014-2018 Yuri Kuznetsov, Taras Machyshyn, Oleksiy Avramenko
 * Website: http://www.espocrm.com
 *
 * EspoCRM is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * EspoCRM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with EspoCRM. If not, see http://www.gnu.org/licenses/.
 ************************************************************************/
module.exports = function (grunt) {

    var jsFilesToMinify = [
        'client/lib/jquery-2.1.4.min.js',
        'client/lib/underscore-min.js',
        'client/lib/es6-promise.min.js',
        'client/lib/backbone-min.js',
        'client/lib/handlebars.js',
        'client/lib/base64.js',
        'client/lib/jquery-ui.min.js',
        'client/lib/moment.min.js',
        'client/lib/moment-timezone-with-data.min.js',
        'client/lib/jquery.timepicker.min.js',
        'client/lib/jquery.autocomplete.js',
        'client/lib/bootstrap.min.js',
        'client/lib/bootstrap-datepicker.js',
        'client/lib/bull.js',
        'client/lib/marked.min.js',

        'client/src/namespace.js',
        'client/src/exceptions.js',
        'client/src/loader.js',
        'client/src/utils.js',

        'client/src/acl.js',
        'client/src/model.js',
        'client/src/model-offline.js',
        'client/src/ajax.js',
        'client/src/controller.js',

        'client/src/ui.js',
        'client/src/acl-manager.js',
        'client/src/cache.js',
        'client/src/storage.js',
        'client/src/models/settings.js',
        'client/src/language.js',
        'client/src/metadata.js',
        'client/src/field-manager.js',
        'client/src/models/user.js',
        'client/src/models/preferences.js',
        'client/src/model-factory.js',
        'client/src/collection-factory.js',
        'client/src/pre-loader.js',
        'client/src/controllers/base.js',
        'client/src/router.js',
        'client/src/date-time.js',
        'client/src/layout-manager.js',
        'client/src/theme-manager.js',
        'client/src/session-storage.js',
        'client/src/view-helper.js',

        'client/src/app.js'
    ];

    function camelCaseToHyphen (string){
        if (string == null) {
            return string;
        }
        return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    var fs = require('fs');

    var themeList = [];
    fs.readdirSync('application/Espo/Resources/metadata/themes').forEach(function (file) {
        themeList.push(file.substr(0, file.length - 5));
    });

    var lessData = {};
    themeList.forEach(function (theme) {
        var name = camelCaseToHyphen(theme);
        var files = {};
        files['client/css/espo/'+name+'.css'] = 'frontend/less/'+name+'/main.less';
        files['client/css/espo/'+name+'-iframe.css'] = 'frontend/less/'+name+'/iframe/main.less';
        var o = {
            options: {
                yuicompress: true,
            },
            files: files
        };
        lessData[theme] = o;
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mkdir: {
            tmp: {
                options: {
                    mode: 0755,
                    create: [
                        'build/tmp',
                    ]
                },

            }
        },
        clean: {
            start: ['build/*'],
            final: ['build/tmp'],
        },
        less: {
            up5techVertical: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'client/css/up5tech-vertical.css': 'frontend/less/up5tech-vertical/main.less',
                }
            }
            /*espo: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'client/css/espo.css': 'frontend/less/espo/main.less',
                }
            },
            espoVertical: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'client/css/espo-vertical.css': 'frontend/less/espo-vertical/main.less',
                }
            },
            espoRtl: {
                options: {
                    yuicompress: true
                },
                files: {
                    'client/css/espo-rtl.css': 'frontend/less/espo-rtl/main.less'
                }
            },
            hazyblueVertical: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'client/css/hazyblue-vertical.css': 'frontend/less/hazyblue-vertical/main.less',
                }
            },
            hazyblue: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'client/css/hazyblue.css': 'frontend/less/hazyblue/main.less',
                }
            },
            sakura: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'client/css/sakura.css': 'frontend/less/sakura/main.less',
                }
            },
            sakuraVertical: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'client/css/sakura-vertical.css': 'frontend/less/sakura-vertical/main.less',
                }
            },
            violet: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'client/css/violet.css': 'frontend/less/violet/main.less',
                }
            },
            violetVertical: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'client/css/violet-vertical.css': 'frontend/less/violet-vertical/main.less',
                }
            }*/
        },
        cssmin: {
            minify: {
                files: {
                    'build/tmp/client/css/espo.css': [
                        'client/css/espo.css',
                    ]
                }
            },
        },
        uglify: {
            options: {
                mangle: false,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            'build/tmp/client/espo.min.js': jsFilesToMinify.map(function (item) {
                return '' + item;
            })
        },
        copy: {
            frontendFolders: {
                expand: true,
                cwd: 'client',
                src: [
                    'src/**',
                    'res/**',
                    'fonts/**',
                    'cfg/**',
                    'modules/**',
                    'img/**',
                    'css/**',
                    'sounds/**',
                    'custom/**'
                ],
                dest: 'build/tmp/client',
            },
            frontendHtml: {
                src: 'frontend/reset.html',
                dest: 'build/tmp/reset.html'
            },
            frontendLib: {
                expand: true,
                dot: true,
                cwd: 'client/lib',
                src: '**',
                dest: 'build/tmp/client/lib/',
            },
            backend: {
                expand: true,
                dot: true,
                src: [
                    'api/**',
                    'application/**',
                    'custom/**',
                    'data/.data',
                    'install/**',
                    'portal/**',
                    'vendor/**',
                    'html/**',
                    'bootstrap.php',
                    'cron.php',
                    'rebuild.php',
                    'clear_cache.php',
                    'upgrade.php',
                    'extension.php',
                    'index.php',
                    'LICENSE.txt',
                    '.htaccess',
                    'web.config',
                ],
                dest: 'build/tmp/',
            },
            final: {
                expand: true,
                dot: true,
                src: '**',
                cwd: 'build/tmp',
                dest: 'build/Up5TechCRM-<%= pkg.version %>/',
            },
        },
        chmod: {
            options: {
                mode: '755'
            },
            php: {
                options: {
                    mode: '644'
                },
                src: [
                    'build/Up5TechCRM-<%= pkg.version %>/**/*.php',
                    'build/Up5TechCRM-<%= pkg.version %>/**/*.json',
                    'build/Up5TechCRM-<%= pkg.version %>/**/*.config',
                    'build/Up5TechCRM-<%= pkg.version %>/**/.htaccess',
                    'build/Up5TechCRM-<%= pkg.version %>/client/**/*.js',
                    'build/Up5TechCRM-<%= pkg.version %>/client/**/*.css',
                    'build/Up5TechCRM-<%= pkg.version %>/client/**/*.tpl',
                    'build/Up5TechCRM-<%= pkg.version %>/**/*.html',
                    'build/Up5TechCRM-<%= pkg.version %>/**/*.txt',
                ]
            },
            folders: {
                options: {
                    mode: '755'
                },
                src: [
                    'build/Up5TechCRM-<%= pkg.version %>/install',
                    'build/Up5TechCRM-<%= pkg.version %>/portal',
                    'build/Up5TechCRM-<%= pkg.version %>/api',
                    'build/Up5TechCRM-<%= pkg.version %>/api/v1',
                    'build/Up5TechCRM-<%= pkg.version %>/api/v1/portal-access',
                    'build/Up5TechCRM-<%= pkg.version %>',
                ]
            }
        },
        replace: {
            timestamp: {
                options: {
                    patterns: [
                        {
                            match: 'timestamp',
                            replacement: '<%= new Date().getTime() %>'
                        }
                    ]
                },
                files: [
                    {
                        src: 'build/tmp/html/main.html',
                        dest: 'build/tmp/html/main.html'
                    },
                    {
                        src: 'build/tmp/html/portal.html',
                        dest: 'build/tmp/html/portal.html'
                    }
                ]
            },
            version: {
                options: {
                    patterns: [
                        {
                            match: 'version',
                            replacement: '<%= pkg.version %>'
                        }
                    ]
                },
                files: [
                    {
                        src: 'build/tmp/application/Espo/Core/defaults/config.php',
                        dest: 'build/tmp/application/Espo/Core/defaults/config.php'
                    }
                ]
            }
        },
        compress: {
            final: {
                options: {
                    archive: 'build/Up5TechCRM-<%= pkg.version %>.zip',
                    mode: 'zip'
                },
                src: ['**'],
                cwd: 'build/Up5TechCRM-<%= pkg.version %>',
                dest: 'Up5TechCRM-<%= pkg.version %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-chmod');

    grunt.registerTask('default', [
        'clean:start',
        'mkdir:tmp',
        'less',
        'uglify',
        'copy:frontendFolders',
        'copy:frontendHtml',
        'copy:frontendLib',
        'copy:backend',
        'replace',
        'copy:final',
        'chmod',
        'clean:final',
    ]);

    grunt.registerTask('applytheme', [
        'clean:start',
        //'mkdir:tmp',
        'less',
        //'uglify',
        //'copy:frontendFolders',
        //'copy:final',
        'clean:final',
    ]);

};