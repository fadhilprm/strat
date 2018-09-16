/*

  RSI - cykedev 14/02/2014

  (updated a couple of times since, check git history)

 */
// helpers
var _ = require('lodash');
var log = require('../core/log.js');

var RSI = require('./indicators/RSI.js');

// let's create our own method
var method = {};

// prepare everything our method needs
method.init = function() {
  
 
 var settings = {
  interval: 14,
  thresholds: {
    low: 30,
    high: 70,
    persistence: 1
  }
};
  
  this.name = 'RSIF';
  

  this.requiredHistory = this.tradingAdvisor.historySize;

  // define the indicators we need
  this.addIndicator('rsi', 'RSI', settings);
  
}

// for debugging purposes log the last
// calculated parameters.
method.log = function(candle) {
  var digits = 8;
  var rsi = this.indicators.rsi;

 
}

method.check = function(candle) {
 var rsi= this.indicators.rsi;
 var al1=(r21-min(r21,8))/(max(r21,13) - min(r21,13))*100:na;
 
}

module.exports = method;
