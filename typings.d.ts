type Image = {
  _type?: string;
  name: string;
  asset: Asset;
};

type Block = {
  _key: string;
  markDefs: unknown[];
  children: unknown[];
  _type: string;
  style: string;
};

type Gallery = {
  gallery: [
    {
      imageUrl: string;
      imageName: string;
    },
  ];
};

type FAQ = [
  {
    faqQuestion: string;
    faqAnswer: Block[];
  },
]

type SecondaryPageData = {
  heroTitle: string;
  heroSubtitle?: string;
  spreadsheetShareLink?: string;
  spreadsheetEmbedLink?: string;
  content: Block[];
  faq?: FAQ;
  files: [
    {
      fileUrl: string;
      name: string;
    },
  ];
  videos: [
    {
      videoLink: string;
      title: string;
    },
  ];
};
