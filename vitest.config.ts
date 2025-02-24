import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "node",

		globals: true,

		include: ["tests/**/*.{test,spec}.ts"],

		coverage: {
			provider: "v8",

			include: [
				"src/option/**/*.ts",
				"src/result/**/*.ts",
				"src/pipe/**/*.ts",
				"src/process/**/*.ts",
				"src/lib/**/*.ts",
			],

			exclude: ["src/**/types/**/*.ts", "src/**/types.ts"],

			thresholds: {
				lines: 100,
				statements: 100,
				branches: 100,
				functions: 100,
			},
		},
	},

	resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
});
