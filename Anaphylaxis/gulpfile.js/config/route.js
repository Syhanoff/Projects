const routeSrc = './source/';
const routeDest = './release/';

module.exports = {
  root: routeDest,
  html: {
    src: routeSrc + "html/*.html",
    watch: routeSrc + "html/**/*.html",
    dest: routeDest
  },
  style: {
    src: routeSrc + "scss/style.+(scss|sass)",
    watch: [routeSrc + "scss/**/*.+(scss|sass|css)", "!" + routeSrc + "scss/libs/*.*"],
    dest: routeDest + "css/"
  },
  fonts: {
    srcEot: routeSrc + "fonts/*.eot",
    srcTtf: routeSrc + "fonts/*.ttf",
    srcWoff: routeSrc + "fonts/*.+(woff|woff2)",
    src: routeSrc + "fonts/",
    srcFontFace: routeSrc + "scss/config/_fonts.scss",
    watch: routeSrc + "fonts/*.+(eot|ttf|woff|woff2)",
    dest: routeDest + "fonts/"
  },
  img: {
    src: [routeSrc + "img/**/*.+(jpeg|jpg|png|gif|svg)", "!" + routeSrc + "img/svg/*.svg",  "!" + routeSrc + "img/OG/*.*"],
    srcWeb: [routeSrc + "img/**/*.+(jpeg|jpg|png|gif)",  "!" + routeSrc + "img/OG/*.*"],
    watch: [routeSrc + "img/**/*.+(jpeg|jpg|png|gif|svg)", "!" + routeSrc + "img/svg/*.svg",  "!" + routeSrc + "img/OG/*.*"],
    dest: routeDest + "img/"
  },
  ogimg: {
    src: routeSrc + "img/OG/*.+(jpeg|jpg|png)",
    watch: routeSrc + "img/OG/*.*",
    dest: routeDest + "img/"
  },
  svg: {
    src: routeSrc + "img/svg/*.svg",
    watch: routeSrc + "img/svg/*.svg",
    dest: routeDest + "img/svg"
  },
  favicon: {
    src: routeSrc + "assets/favicon/*.+(png|svg)",
    watch: routeSrc + "assets/favicon/*.+(png|svg)",
    dest: routeDest + "favicon/",
    srcIcon: routeSrc + "assets/favicon/favicon.png",
    srcInk: routeSrc + "html/parts/favicon.html",
    destIcon: routeSrc + "assets/favicon/",
    destIconSet: routeSrc + "favicon/",
    destInk: routeSrc + "html/parts/",
  },
  script: {
    src: routeSrc + "js/main.js",
    watch: routeSrc + "js/**/*.js",
    dest: routeDest + "js/"
  },
  assets: {
    src: [routeSrc + "assets/**/*.*", "!" + routeSrc + "assets/favicon/*.*"],
    watch: [routeSrc + "assets/**/*.*", "!" + routeSrc + "assets/favicon/*.*"],
    dest: routeDest
  },
  zip: {
    destOld: "./*.zip",
    destNew: "./"
  },
  deploy: {
    src: [routeDest + '**/*.*'],
  }
}
