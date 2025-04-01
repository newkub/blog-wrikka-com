import { defineConfig, presetIcons, presetWebFonts, presetWind4, transformerVariantGroup } from "unocss";

export default defineConfig({
	presets: [
		presetWind4(),
		presetIcons({
			collections: {
				mdi: () => import("@iconify-json/mdi/icons.json").then(i => i.default),
			},
			scale: 1.2,
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle",
			},
		}),
		presetWebFonts({
			provider: "google",
			fonts: {
				sans: "Noto Sans Thai",
				mono: "Fira Code",
			},
		}),
	],
	transformers: [
		transformerVariantGroup(),
	],
	shortcuts: {
		"btn": "py-2 px-4 font-semibold rounded-lg shadow-md",
		"btn-primary": "bg-blue-500 text-white hover:bg-blue-700",
		"btn-secondary": "bg-gray-500 text-white hover:bg-gray-700",
	},
	theme: {
		colors: {
			primary: {
				50: "#f0f9ff",
				100: "#e0f2fe",
				500: "#0ea5e9",
				700: "#0369a1",
			},
			brand: {
				1: "var(--vp-c-brand-1)",
				2: "var(--vp-c-brand-2)",
				3: "var(--vp-c-brand-3)",
				soft: "var(--vp-c-brand-soft)",
			},
			warning: {
				1: "var(--vp-c-warning-1)",
				2: "var(--vp-c-warning-2)",
				3: "var(--vp-c-warning-3)",
				soft: "var(--vp-c-warning-soft)",
			},
			danger: {
				1: "var(--vp-c-danger-1)",
				2: "var(--vp-c-danger-2)",
				3: "var(--vp-c-danger-3)",
				soft: "var(--vp-c-danger-soft)",
			},
			tip: {
				1: "var(--vp-c-tip-1)",
				2: "var(--vp-c-tip-2)",
				3: "var(--vp-c-tip-3)",
				soft: "var(--vp-c-tip-soft)",
			},
		},
		breakpoints: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
	},
	safelist: [
		"btn",
		"btn-primary",
		"btn-secondary",
	],
});
