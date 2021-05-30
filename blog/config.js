module.exports = {
  pathPrefix: '',
  siteUrl: 'https://jo8937.github.io',
  siteTitle: 'Joecool',
  siteDescription: 'Logbook of a software developer',
  author: 'Jihoon Cho',
  postsForArchivePage: 3,
  defaultLanguage: 'ko',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://jo8937-github-io.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/jo8937',
    facebook: 'https://www.facebook.com/jo8937',
    twitter: 'https://twitter.com/jo8937',
    instagram: 'https://www.instagram.com/jo8937',
    linkedin: 'https://www.linkedin.com/in/jo8937',
    stackoverflow: 'https://stackoverflow.com/users/6375098/jo8937',
    qiita: 'https://qiita.com/jo8937',
    medium: 'https://medium.com/@jihooncho',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || '',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
};
