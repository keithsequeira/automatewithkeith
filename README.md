# Automate With Keith

Single-page website for Automate With Keith, Keith Sequeira's consulting practice. It is plain HTML and CSS, with no framework, build step, or package install.

## File structure

```text
index.html      Page content
styles.css      Layout and appearance
assets/         Favicon
CNAME           Custom domain for GitHub Pages
.nojekyll       Tells GitHub Pages not to run Jekyll
README.md       This file
.gitignore      Local files that should not be published
```

## Preview locally

Open `index.html` in a browser. Paths are relative, so the page also works from any static file server.

## Update the site

Edit the copy in `index.html`. Edit colors, spacing, and layout in `styles.css`.

Every contact link uses `mailto:automatewithkeith@gmail.com` with the subject `Automation Project Inquiry`. To switch to a hosted form or scheduling page later, replace those `mailto:` links. A comment above the contact section marks the spot.

Confirm that `automatewithkeith@gmail.com` receives mail before you rely on it. This repository does not create or test the mailbox.

## Deploy with GitHub Pages

Use GitHub Pages' standard branch deployment. Do not add a GitHub Actions workflow.

The repository must be public to use GitHub Pages on the free plan.

In the repository on GitHub, open **Settings → Pages** and use:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**
- Custom domain: **automatewithkeith.com**
- HTTPS: **Enforce HTTPS** once the option is available

The `CNAME` file is already in the repository root. Saving the custom domain in Pages settings uses that same domain.

GitHub recommends verifying the domain before you point DNS at GitHub, so another user cannot claim it. Add the verification TXT record GitHub gives you, then add the website records below. Official guide: [Verifying your custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

Add the custom domain in Pages before you change the website DNS records. Official guide: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## GoDaddy DNS

GoDaddy keeps managing DNS. Add the records below for the website. Leave existing email records in place, including MX records and TXT records used for SPF, DKIM, or DMARC.

GitHub's current apex-domain addresses, from the guide linked above:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

Also add this record so `www.automatewithkeith.com` redirects to the apex domain:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `keithsequeira.github.io` |

Point `www` at `keithsequeira.github.io` only. Do not include the repository name, and do not point `www` at the apex domain. Do not add a wildcard record such as `*`.

If GoDaddy has a parking or forwarding `A` record on `@`, remove that website record before saving the four GitHub `A` records. Do not remove mail records while you do that.

DNS changes can take up to 24 hours. After they propagate, return to **Settings → Pages** and turn on **Enforce HTTPS**. That option can also take up to 24 hours to appear.

Check the records in PowerShell:

```powershell
Resolve-DnsName automatewithkeith.com -Type A
Resolve-DnsName automatewithkeith.com -Type AAAA
Resolve-DnsName www.automatewithkeith.com -Type CNAME
```

## Publish later changes

Edit the files, commit, and push to `main`. GitHub Pages publishes the `main` branch from the repository root. There is no build command.
