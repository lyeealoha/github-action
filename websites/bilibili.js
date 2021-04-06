let { URL } = require('url')
let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')

module.exports = {
  test(url) {
    let parsed = new URL(url)
    return parsed.hostname.match('t.bilibili.com')
  },

  async process(url) {
    let res = await fetch(url)
    let html = await res.text()
    let document = new JSDOM(html).window.document

    let content = document.querySelector('div.article-holder')

    return {
      title,
      author,
      dom: content
    }

  },

  samples: [
    'https://t.bilibili.com/510166072378397988',
    'https://t.bilibili.com/h5/dynamic/detail/510166072378397988'
  ]
}
