import { remark } from 'remark';
import html from 'remark-html';
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function getPosts() {
  const response = await airtable.list({ maxRecords: 200 });
  if (!response.records) return undefined;

  const articles = response.records.map(record => {
    const { id, createdTime, fields } = record;
    const { title, subtitle, category, description, author, tags } = fields;
    const img = fields.img[0].url;
    const article = {
      id,
      title,
      subtitle,
      category,
      img,
      description,
      published: createdTime,
      author,
      tags,
    };
    return article;
  });

  return articles;
}

export async function getPostById(postId) {
  let post = await airtable.retrieve(postId);
  if (!post.id) return undefined;

  const { id, createdTime, fields } = post;
  const { title, subtitle, category, description, content, tags } = fields;
  const img = fields.img[0].url;
  const article = {
    id,
    title,
    subtitle,
    category,
    img,
    description,
    published: createdTime,
    content,
    tags,
  };

  return article;
}
