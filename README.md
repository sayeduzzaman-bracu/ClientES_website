# ClientES website

This standalone site explains ClientES and links buyers to external checkout or the owner for manual bKash. The product and account workspace run on a separate Worker.

Set the public Gumroad checkout URL and ClientES product origin in `site/public-config.js` when the final addresses are available. The site's `wrangler.jsonc` serves the `site/` folder directly. The website repository needs only this folder and its configuration.

For a local preview from this directory, run `python -m http.server 4174 --bind 127.0.0.1 --directory site` and open `http://127.0.0.1:4174/`. Local links to the product default to port 4173. To start the synthetic product preview on that port, run `node tools/ui-preview-v048.mjs . 4173 --activation` from the product folder with dependencies installed.

Live storefront links are enabled once configured. No customer records or service credentials belong in the website repository.
