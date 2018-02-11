'use strict';
window.renderStatistics = function (ctx, names, times) {
  var INITIAL_STAT_X = 100;
  var INITIAL_STAT_Y = 10;

  var OFFSET_SHADOW_STAT_X = 10;
  var OFFSET_SHADOW_STAT_Y = 10;

  var SHADOW_X = INITIAL_STAT_X + OFFSET_SHADOW_STAT_X;
  var SHADOW_Y = INITIAL_STAT_Y + OFFSET_SHADOW_STAT_Y;

  var CONGRATULATIONS_X = 230;
  var CONGRATULATIONS_Y = 40;
  var TEXT_RESULTS_X = 220;
  var TEXT_RESULTS_Y = 60;

  var STAT_WIDTH = 420;
  var STAT_HEIGHT = 270;

  var SHADOW_STAT_COLOR = 'rgba(0, 0, 0, 0.7)';
  var STAT_COLOR = 'white';
  var FONT = '16px PT Mono';
  var DEFAULT_TEXT_COLOR = '#000';


  var createRect = function (x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var createText = function (text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = FONT;
    ctx.fillText(text, x, y);
  };

  createRect(SHADOW_X, SHADOW_Y, STAT_WIDTH, STAT_HEIGHT, SHADOW_STAT_COLOR);
  createRect(INITIAL_STAT_X, INITIAL_STAT_Y, STAT_WIDTH, STAT_HEIGHT, STAT_COLOR);

  createText('Ура, вы победили!', CONGRATULATIONS_X, CONGRATULATIONS_Y, DEFAULT_TEXT_COLOR);
  createText('Cписок результатов:', TEXT_RESULTS_X, TEXT_RESULTS_Y, DEFAULT_TEXT_COLOR);
};
