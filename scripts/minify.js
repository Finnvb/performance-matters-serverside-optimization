const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

const fs = require('fs')

const cssFileMain = 'public/style.css'
const minCssFile = 'public/style.min.css'
const cssFileLogin = 'public/loginStyles.css'
const mincssFileLogin = 'public/loginStyles.min.css'

// Minify css
fs.readFile(cssFileMain, async (err, data) => {
  const output = await postcss([cssnano, autoprefixer]).process(data);
  const minifiedCss = output.css;
 
  fs.writeFile(minCssFile, minifiedCss, err => {
    if (err) {
      console.log(err);
    }
  })
})

fs.readFile(cssFileLogin, async (err, data) => {
  const output = await postcss([cssnano, autoprefixer]).process(data);
  const minifiedCss = output.css;
 
  fs.writeFile(mincssFileLogin, minifiedCss, err => {
    if (err) {
      console.log(err);
    }
  })
})
