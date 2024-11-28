import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  firebase,
  python,
  react,
  tailwind,
  disc02,
  discordBlack,
  facebook,
  instagram,
  notification2,
  notification3,
  notification4,
  pythonlogo,
  csslogo,
  htmllogo,
  jslogo,
  reactlogo,
  recording01,
  recording03,
  sliders04,
  telegram,
  nodelogo,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Chat App",
    url: "#chat-app",
  },
  {
    id: "1",
    title: "Workflow",
    url: "#workflow",
  },
  {
    id: "2",
    title: "Models",
    url: "#models",
  },
];

export const heroIcons = [firebase, python, react, tailwind];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [pythonlogo, reactlogo, csslogo, htmllogo, jslogo,nodelogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];



export const benefits = [
  {
    id: "0",
    title: "Data Collection",
    text: "We collected data from various sources such as Reddit, Kaggle, and Gretel.ai, ensuring a comprehensive dataset for detecting cyberbullying in game chats.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Data Cleaning",
    text: "We thoroughly cleaned the data by removing unnecessary characters, symbols, and irrelevant content to ensure precise analysis.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Vectorization",
    text: "We transformed the chat data into numerical representations using techniques like word embeddings and TF-IDF to prepare it for modeling.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Tokenization",
    text: "We tokenized the chat logs, breaking them down into words and phrases, making it easier to analyze language patterns related to cyberbullying.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Modelling",
    text: "We trained models like Logistic Regression, Decision Tree Classifier, and Random Forest to accurately detect and classify instances of cyberbullying in game chats.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Evaluation & Testing",
    text: "Our models were rigorously evaluated to ensure high accuracy and effectiveness in identifying harmful language and cyberbullying behavior in different gaming scenarios.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
