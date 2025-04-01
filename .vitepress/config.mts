import { presetIcons, presetTagify, presetWebFonts, presetWind, transformerVariantGroup } from "unocss";
import Unocss from "unocss/vite";
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { nav } from "./navbar";
import { sidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
	title: "My Awesome Project",
	description: "A VitePress Site",
	lastUpdated: true,
	cleanUrls: true,
	markdown: {
		lineNumbers: true,
		toc: { level: [1, 2, 3] },
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav,
		sidebar,
		outline: { level: [2, 3], label: "On this page" },
		lastUpdated: {
			text: "Updated at",
			formatOptions: {
				dateStyle: "full",
				timeStyle: "medium",
			},
		},
		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright 2024",
		},
	},
	vite: {
		plugins: [
			Unocss({
				presets: [
					presetIcons(),
					presetWebFonts(),
					presetWind(),
					presetTagify(),
				],
				transformers: [
					transformerVariantGroup(),
				],
			}),
		],
	},
}));
