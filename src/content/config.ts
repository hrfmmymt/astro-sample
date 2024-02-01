// ユーティリティを`astro:content`からインポート
import { z, defineCollection } from 'astro:content';

// 各コレクションに`type`と`schema`を定義
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.string()
  })
});
// コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
export const collections = {
  posts: postsCollection,
};
