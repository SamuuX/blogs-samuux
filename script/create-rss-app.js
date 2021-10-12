let Parser = require('rss-parser');
let parser = new Parser();
const { parse } = require('rss-to-json');

(async () => {

  let feed = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UCtHTCVs_1V1XWuuF4N8ZTDg');
  console.log(feed.description);

  feed.items.forEach(item => {

    const { title, link, description, published, content, thumbnail } = item

    console.log({ title, link, description, published, content, thumbnail });

  });

})();


// async await
(async () => {

    var rss = await parse('https://www.youtube.com/feeds/videos.xml?channel_id=UCtHTCVs_1V1XWuuF4N8ZTDg');

    console.log(JSON.stringify(rss, null, 3));

})();
