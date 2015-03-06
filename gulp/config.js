var base = './httpdocs',
    src = './httpdocs/src',
    dest = './httpdocs/assets';

module.exports = {
  main: {
    src: src,
    dest: dest,
    base: base
  },
  browserify: {
    bundleConfigs: [{
      entry: src + '/js/app.js',
      outputName: 'main.js',
      dest: dest + '/js',
      paths: [
        './node_modules',
        './httpdocs/src/js'
      ]
    }]
  },
  sass: {
    entry: src + '/scss/styles.scss',
    dest: dest + '/css',
    style: 'expanded' // 'compressed' or 'expanded'
  },
  sprite: {
    entry: src + '/icons/*.svg',
    dest: base, // umbrella destination (more specific for each item below)
    name: 'sprite.svg', // file name
    sprite: './assets/img/', // dest rel to base
    scss:'./src/scss/_sprite.scss', // dest rel to base
    img: base + '/assets/img' //img location for svg2png
  }
};