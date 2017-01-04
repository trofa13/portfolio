// Karma configuration
// Generated on Wed Jan 04 2017 16:48:46 GMT+0300 (MSK)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './src/js/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: {
        devtool: 'inline-source-map',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(scss|sass)$/,
                    loader: "style-loader!css-loader!postcss-loader!sass-loader"
                }
            ]
        }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    specReporter: {
        maxLogLines: 5,         // limit number of lines logged per test 
        suppressErrorSummary: true,  // do not print error summary 
        suppressFailed: false,  // do not print information about failed tests 
        suppressPassed: false,  // do not print information about passed tests 
        suppressSkipped: true,  // do not print information about skipped tests 
        showSpecTiming: false // print the time elapsed for each spec 
    },
      

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    client: {
        captureConsole: true
    },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}


