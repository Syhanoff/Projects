// Плагины
const { watch, parallel, series } = require('gulp');
const browserSync = require('browser-sync').create();


// Конфигурация
const route = require('./config/route');
const setting = require('./config/setting');


// Задачи
const html = require('./task/html');
const style = require('./task/style');
const script = require('./task/script');
const clear = require('./task/clear');
const fonts = require('./task/fonts');
const fontFace = require('./task/font-face');
const img = require('./task/image');
const ogimg = require('./task/ogimage');
const svg = require('./task/svg');
const assets = require('./task/assets');
const zip = require('./task/zip');
const ftp = require('./task/ftp');
const favicon = require('./task/favicon');
const criticalCSS = require('./task/critical');


// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: route.root
      },
    notify: false,
    port: 3000,
  })
}


// Наблюдение
const watcher = () => {
  watch(route.html.watch, html).on('change', browserSync.reload);
  watch(route.style.watch, style).on('change', browserSync.reload);
  watch((route.fonts.watch), fonts).on('all', browserSync.reload);
  watch((route.fonts.dest), fontFace).on('all', browserSync.reload);
  watch((route.img.watch), img).on('all', browserSync.reload);
  watch((route.ogimg.watch), ogimg).on('all', browserSync.reload);
  watch((route.svg.watch), svg).on('all', browserSync.reload);
  watch((route.script.watch), script).on('change', browserSync.reload);
  watch((route.favicon.watch), favicon).on('all', browserSync.reload);
  watch((route.assets.watch), assets);
}


// Запуск задач
exports.clear = clear;
exports.server = server;
exports.watcher = watcher;
exports.html = html;
exports.style = style;
exports.script = script;
exports.clear = clear;
exports.fonts = fonts;
exports.fontFace = fontFace;
exports.img = img;
exports.ogimg = ogimg;
exports.svg = svg;
exports.assets = assets;
exports.zip = zip;
exports.ftp = ftp;
exports.favicon = favicon;
exports.criticalCSS = criticalCSS;


// Сборка
const build = series(clear, parallel(html, img, ogimg, svg, fonts, assets, script), fontFace, style);
const dev = series(build, parallel(watcher, server));
exports.default = setting.isProd ? build : dev;
exports.deployZip = series(build, zip);
exports.deployFtp = series(build, ftp);
// exports.buildCritical = series(build, criticalCSS);
// exports.duildFavicon = series(build, favicon);
