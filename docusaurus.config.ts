import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Avatar Alchemy',
  tagline: 'Transforming Booth avatars into functional VRChat creations',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://AvatarAlchemy.philuu.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'philuu', // Your GitHub org/user name
  projectName: 'avatar-alchemy', // Your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/HugPhiluu/avatar-alchemy/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Avatar Alchemy',
      logo: {
        alt: 'Avatar Alchemy Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/HugPhiluu/avatar-alchemy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/83HbGxEk9Y',
            },
            {
              label: 'X',
              href: 'https://x.com/PhiluuSnow',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Booth',
              href: 'https://philuu.booth.pm/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/HugPhiluu/avatar-alchemy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Philuu, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
