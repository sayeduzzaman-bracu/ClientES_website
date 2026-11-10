# ClientES website

This static website mirrors the existing ClientES app landing page. Edit the public copy in `site/index.html`. The current copy uses the ClientOS name to match the app.

The access and sign-in buttons link to the existing product Worker. The manual bKash instructions and owner contact links match the app homepage. A setting for a future Gumroad checkout URL is reserved in `site/public-config.js`. The website needs no customer data or service credentials.

Run `python -m http.server 4174 --bind 127.0.0.1 --directory site` for a local preview. Wrangler serves the `site/` folder directly.
