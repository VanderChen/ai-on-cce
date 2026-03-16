const config = {
  title: 'AI on CCE',
  tagline: 'Blueprints for AI Infrastructure on Cloud Container Engine',
  favicon: 'img/logo.svg', // Use logo.svg as favicon temporarily
  url: 'https://VanderChen.github.io',
  baseUrl: '/ai-on-cce/',
  organizationName: 'VanderChen',
  projectName: 'ai-on-cce',
  onBrokenLinks: 'throw',
  
  markdown: {
    format: 'md',
    mermaid: true,
    preprocessor: ({filePath, fileContent}) => {
      return fileContent;
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          path: '../blogs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'AI on CCE',
      logo: {
        alt: 'CCE Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Blueprints & Blogs',
        },
        {
          href: 'https://github.com/VanderChen/ai-on-cce',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} AI on CCE. Built with Docusaurus.`,
    },
  },
};

module.exports = config;
