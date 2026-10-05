// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const repoUrl = 'https://github.com/Viktar-T/OZE-projektowanie';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Programy komputerowe w projektowaniu instalacji OZE',
  tagline: 'Kierunek: Odnawialne źródła energii',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // Since Docusaurus 3.10, `v4: true` also enables `fasterByDefault` (requires
  // the @docusaurus/faster package) and `mdx1CompatDisabledByDefault` (breaks
  // the `:::tip Title` admonition syntax used in the docs), so the flags are
  // listed explicitly.
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
    },
  },

  // Production URL of the site (Vercel deployment)
  url: 'https://oze-projektowanie.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub repository (used by `docusaurus deploy` and the links below)
  organizationName: 'Viktar-T',
  projectName: 'OZE-projektowanie',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // "Edytuj tę stronę" links. Remove this to hide them.
          editUrl: `${repoUrl}/tree/main/oze-pr/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Old URLs that were already published, kept working after renames
        redirects: [
          {
            to: '/docs/projekty/photovoltaic-systems',
            from: '/docs/projekty/photovoltaic systems',
          },
          {
            to: '/docs/projekty/photovoltaic-systems/pr-1-task-for-students',
            from: '/docs/projekty/photovoltaic systems/pr-1-task-for-students',
          },
          {
            to: '/docs/projekty/photovoltaic-systems/pr-2-task-sunny-design',
            from: '/docs/projekty/photovoltaic systems/pr-2-task-sunny-design',
          },
          {
            to: '/docs/projekty/photovoltaic-systems/pv-professional-perspective',
            from: '/docs/projekty/photovoltaic systems/pv-professional-perspective',
          },
          {
            to: '/docs/projekty/wind/topfarm-1',
            from: '/docs/projekty/wind/projekty/wind/topfarm-1',
          },
          {
            to: '/docs/projekty/wind/topfarm-2',
            from: '/docs/projekty/wind/projekty/wind/topfarm-2',
          },
          {
            to: '/docs/projekty/wind/topfarm-3',
            from: '/docs/projekty/wind/projekty/wind/topfarm-3',
          },
        ],
      },
    ],
  ],

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OZE – Programy komputerowe',
        logo: {
          alt: 'Logo OZE',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Dokumentacja',
          },
          {
            href: repoUrl,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Przedmiot',
            items: [
              {
                label: 'Wprowadzenie',
                to: '/docs/intro',
              },
              {
                label: 'Wykłady',
                to: '/docs/category/wykłady-20-godzin',
              },
              {
                label: 'Projekty',
                to: '/docs/category/projekty',
              },
            ],
          },
          {
            title: 'Materiały',
            items: [
              {
                label: 'Literatura i materiały',
                to: '/docs/literatura',
              },
            ],
          },
          {
            title: 'Więcej',
            items: [
              {
                label: 'GitHub',
                href: repoUrl,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OZE – Programy komputerowe. Zbudowano z Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // Languages used in the docs that Prism does not load by default
        additionalLanguages: ['bash'],
      },
    }),
};

export default config;
