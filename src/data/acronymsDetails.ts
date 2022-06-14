interface AcronymResource {
  title: string;
  type?: 'article' | 'video' | 'podcast' | 'playlist';
  url: string;
  source: string;
}

interface Quote {
  content: string;
  author: string;
  url: string;
}

export interface Acronym {
  acronym: string;
  definition: string;
  quote: Quote;
  resources: AcronymResource[];
  related?: string[];
}

const acronymsDetails: Acronym[] = [
  {
    acronym: 'a11y',
    definition: 'Accessibility',
    quote: {
      content:
        'Accessibility (a11y) is a measure of how accessible a computer system is to all people, including those with disabilities or impairments. It concerns both software and hardware and how they are configured in order to enable a disabled or impaired person to use that computer system successfully.',
      author: 'techopedia.com',
      url: 'https://www.techopedia.com/definition/10165/accessibility-a11y',
    },
    resources: [
      {
        title: 'The A11Y Project',
        url: 'https://www.a11yproject.com/',
        source: 'a11yproject.com',
      },
      {
        title: 'A11YCasts with Rob Dodson',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g',
        source: 'youtube.com',
      },
      {
        title: 'Accessibility',
        url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
        source: 'mdn.com',
      },
    ],
  },
];

export default acronymsDetails;
