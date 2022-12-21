import { defineConfig } from "astro/config";

import image from "@astrojs/image";
export default {
	integrations: [
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
	],
};
