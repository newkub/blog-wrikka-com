import { createContentLoader } from "vitepress";

export interface BlogPost {
	title: string;
	date: string;
	description: string;
	image?: string;
	tags?: string[];
	slug: string;
}

export const posts = await createContentLoader("blog/*.md").load() as BlogPost[];

export async function getBlogPosts(): Promise<BlogPost[]> {
	return posts.map(post => ({
		...post,
		slug: post.url.replace("/blog/", "").replace("/", ""),
		title: post.frontmatter.title || "Untitled",
		date: post.frontmatter.date || new Date().toISOString(),
		description: post.frontmatter.description || "",
		image: post.frontmatter.image,
		tags: post.frontmatter.tags,
	}));
}
