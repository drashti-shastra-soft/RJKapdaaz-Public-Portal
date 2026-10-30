# RJ Kapdaaz

RJ Kapdaaz is a responsive ASP.NET public website for a Surat-based linen and uniform supplier. The site showcases premium hotel and hospital linen, bedding, towels, mattresses, and custom uniforms for hotels, hospitals, and corporates. Visitors can explore export information, read client testimonials, view career opportunities, and contact the team via web forms or WhatsApp. The portal is SEO-friendly and mobile-ready.

## Features

- **Public landing pages** — home, about, products, export info, testimonials, careers, and contact pages.
- **Linen collection** — showcase of Bed Linen, Hospital Linen, Mattresses, Pillows & Cushions, Bed Runners, Duvets & Comforters, Blankets, Bath Mats, Napkins, and Bath Towels.
- **Uniform collection** — showcase of T-shirts, Aprons, Kurtas, Blazers, Waistcoats, Safaris, and specialized uniforms for hospitals, hotels, and corporates.
- **Brand partnerships** — highlights of trusted brands used (Welspun India for linen; Mafatlal, S.Kumars, Siyarams, and Valji for uniforms).
- **Industry expertise** — dedicated sections for hotel, hospital, and corporate sectors.
- **Client testimonials** — showcase of real client reviews and ratings.
- **Client portfolio** — display of esteemed clients across Gujarat and beyond.
- **Export information** — details about export capabilities and "Made in India" products.
- **Careers** — job openings and application submission.
- **Contact & inquiry** — contact forms with validation and direct WhatsApp inquiry links.
- **SEO-friendly** — clean URLs, meta titles/descriptions, canonical tags, Open Graph tags, sitemap, and `robots.txt`.
- **Mobile-ready** — responsive layout for mobile, tablet, and desktop.
- **Shared web UI** — Razor views, shared layout, partials, pagination helper, and client-side validation.

> Feature descriptions are based on the pages, domain models, and views present in this repository. Actual behavior may depend on the connected database and configuration.

## Technology stack

- C# and .NET Framework 4.8 (or `<your target framework>`)
- ASP.NET MVC with Razor views
- Bootstrap for responsive UI
- HTML, CSS, JavaScript, and jQuery
- Visual Studio solution (`RjKapdaaz.sln`)
- Entity Framework + SQL Server for content, inquiries, careers, and testimonials
- SEO tooling: meta tags, sitemap, and `robots.txt`
- WhatsApp Click-to-Chat integration for inquiries

## Solution structure

```text
V4/
├── RjKapdaaz.sln
├── RjKapdaaz/                             # ASP.NET MVC public website
│   ├── Controllers/                       # Public + admin controllers
│   ├── Views/                             # Razor UI pages
│   │   ├── Shared/                        # Layout and partials
│   │   ├── Home/                          # Landing pages
│   │   ├── Linen/                         # Linen collection pages
│   │   ├── Uniforms/                      # Uniform collection pages
│   │   ├── Industries/                    # Hotel, hospital, corporate pages
│   │   ├── Testimonials/                  # Client reviews
│   │   ├── Export/                        # Export information
│   │   ├── Careers/                       # Career listings and application
│   │   └── Contact/                       # Contact forms and WhatsApp links
│   ├── Content/                           # CSS, JS, images, fonts
│   ├── App_Start/                         # Routes, filters, DI setup
│   ├── Config/                            # Environment-specific app settings
│   └── Web.config
