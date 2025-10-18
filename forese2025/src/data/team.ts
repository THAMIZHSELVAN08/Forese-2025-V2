export type CoreMember = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl?: string;
  oneLiner: string;
};

export type SeniorMember = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl?: string;
  oneLiner: string;
};

export type Member = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl?: string;
  oneLiner: string;
};

// Senior Core Members (9 members)
export const seniorCoreMembers: CoreMember[] = [
  {
    id: 1,
    name: "Manoj Kumar",
    role: "President",
    imageUrl: "/images/c1.jpg",
    linkedinUrl: "https://www.linkedin.com/in/manoj-kumar-34681827a/",
    oneLiner: "Every story I create , creates me",
  },
  {
    id: 2,
    name: "Sanjana",
    role: "Vice-President",
    imageUrl: "/images/c2.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sanjana-b-8037162a9/",
    oneLiner: "Exi-S-ted",
  },
  {
    id: 3,
    name: "Sri Varshini",
    role: "Vice-President",
    imageUrl: "/images/c3.jpg",
    linkedinUrl: "https://www.linkedin.com/in/srivarshini-s-g-7a9a6a293/",
    oneLiner:
      "Why stress about tomorrow? It hasn't even sent me an invitation yet!",
  },
  {
    id: 4,
    name: "Arunima",
    role: "General Secretary",
    imageUrl: "/images/c4.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aru04/",
    oneLiner: "If it is to be said, so it be, so it is",
  },
  {
    id: 5,
    name: "Jhalak",
    role: "General Secretary",
    imageUrl: "/images/c5.jpg",
    linkedinUrl: "https://www.linkedin.com/in/jhalak-vashistha/",
    oneLiner:
      "I like getting older. I feel like I'm finally aging into my personality",
  },
  {
    id: 9,
    name: "Kartheesan",
    role: "General Secretary",
    imageUrl: "/images/c9.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kartheesan05/",
    oneLiner: "Visca Barça",
  },
  {
    id: 6,
    name: "Karthik",
    role: "General Secretary",
    imageUrl: "/images/c6.jpg",
    linkedinUrl: "https://www.linkedin.com/in/karthik-bm-73048a28a/",
    oneLiner:
      "How can someone not fall in love with internal combustion engine",
  },
  {
    id: 7,
    name: "Pranoy",
    role: "General Secretary",
    imageUrl: "/images/c7.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pjpranoy/",
    oneLiner: "Non sine periculo",
  },
  {
    id: 8,
    name: "Sandhya",
    role: "General Secretary",
    imageUrl: "/images/c8.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sandhya-sadasivam-89bb4126b/",
    oneLiner: "Survivor of mondays",
  },
  
];

// Junior Core Members (9 members)
export const juniorCoreMembers: CoreMember[] = [
  {
    id: 11,
    name: "Anushri",
    role: "Executive Director",
    imageUrl: "/images/c11.jpg",
    linkedinUrl: "https://www.linkedin.com/in/anushri",
    oneLiner: "Travel more, worry less, spread kindness",
  },
  {
    id: 10,
    name: "Kaamesh KC",
    role: "Executive Director",
    imageUrl: "/images/c10.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kaamesh-kc-5714b029a/",
    oneLiner:
      "Power is a lot like real estate. It's all about location, location, location.",
  },
  {
    id: 14,
    name: "Salma Siddique",
    role: "Executive Director",
    imageUrl: "/images/c14.jpg",
    linkedinUrl: "https://www.linkedin.com/in/salma-siddique-962608320/",
    oneLiner: "I believe I can, and thus I become",
  },
  
  {
    id: 13,
    name: "Sarvesh Vaidhi",
    role: "Executive Director",
    imageUrl: "/images/c13.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sarvesh-vaidhi-0554972b8/",
    oneLiner: "Procrastination final boss",
  },
  {
    id: 12,
    name: "Siddharth Naren",
    role: "Executive Director",
    imageUrl: "/images/c12.jpg",
    linkedinUrl: "https://www.linkedin.com/in/siddharth-naren-baskaran/",
    oneLiner: "Life gave me lemons, but forgot the sugar and water",
  },
  {
    id: 15,
    name: "Mubashir Sheriff",
    role: "Tech Head",
    imageUrl: "/images/c15.png",
    linkedinUrl: "https://www.linkedin.com/in/r-mubashir-sheriff/",
    oneLiner:
      "Life is a tragedy for those who feel, and a comedy for those who think.",
  },
  {
    id: 16,
    name: "Thamizh Selvan",
    role: "Tech Head",
    imageUrl: "/images/c16.jpg",
    linkedinUrl: "https://www.linkedin.com/in/thamizhselvan1/",
    oneLiner: "404 Sleep Not Found",
  },
  {
    id: 17,
    name: "Visvajith",
    role: "Communications Chair",
    imageUrl: "/images/c17.jpg",
    linkedinUrl: "https://www.linkedin.com/in/visvajith-logasuresh-796a4b329/",
    oneLiner:
      "Tech enthusiast with a love for watches, cars, and creating cool projects",
  },
  {
    id: 18,
    name: "Shree Kowsik",
    role: "Treasurer",
    imageUrl: "/images/c18.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shree-kowsik-s-b-520b9828b/",
    oneLiner: "Veni Vidi Vici",
  },
];

export const seniorMembers: SeniorMember[] = [
  {
    id: 1,
    name: "Ananyaa P",
    role: "Senior Member",
    imageUrl: "/images/sm1.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ananyaa-permalsamy-220a04263/",
    oneLiner: "True to my trust",
  },
  {
    id: 2,
    name: "S Aswin Deivanayagam",
    role: "Senior Member",
    imageUrl: "/images/sm2.jpg",
    linkedinUrl: "www.linkedin.com/in/aswin-deivanayagam-910b6824a",
    oneLiner:
      "It's not the beginning or the end that matters, it's the journey that is important",
  },
  {
    id: 3,
    name: "Bharath KS",
    role: "Senior Member",
    imageUrl: "/images/sm3.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/2022mn0693?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    oneLiner: "Speaking out is the single weapon in my arsenal!",
  },
  {
    id: 4,
    name: "Dakxin Shaswath Haran Y",
    role: "Senior Member",
    imageUrl: "/images/sm4.jpg",
    linkedinUrl: "https://www.linkedin.com/in/dakxin-shaswath-haran",
    oneLiner: "Driven by passion, fueled by curiosity",
  },
  {
    id: 5,
    name: "Dheekshitha.R",
    role: "Senior Member",
    imageUrl: "/images/sm5.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/dheekshitha-ramachandran-188690295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Strong and positive",
  },
  {
    id: 6,
    name: "Divya Sri M",
    role: "Senior Member",
    imageUrl: "/images/sm6.jpg",
    linkedinUrl: "https://www.linkedin.com/in/divya-sri-m-45b969266",
    oneLiner: "I never give up until I get something right...",
  },
  {
    id: 7,
    name: "Harinee V T",
    role: "Senior Member",
    imageUrl: "/images/sm7.jpg",
    linkedinUrl: "www.linkedin.com/in/harineevt",
    oneLiner: "Quintessential Virgo✨️",
  },
  {
    id: 8,
    name: "Harsh Bothra S",
    role: "Senior Member",
    imageUrl: "/images/sm8.jpg",
    linkedinUrl: "https://www.linkedin.com/in/harsh-bothra-aa4062286",
    oneLiner: "Work wholeheartedly",
  },
  {
    id: 9,
    name: "Hashrika. R",
    role: "Senior Member",
    imageUrl: "/images/sm9.jpg",
    linkedinUrl: "https://www.linkedin.com/in/hashrika-ramesh-2a678a257",
    oneLiner: "A mix of golden retriever and black cat",
  },
  {
    id: 10,
    name: "Hemanth K R",
    role: "Senior Member",
    imageUrl: "/images/sm10.jpg",
    linkedinUrl: "https://www.linkedin.com/in/senior-member-10",
    oneLiner: "",
  },
  {
    id: 11,
    name: "N JEEVAN THIRUNAUKARASU",
    role: "Senior Member",
    imageUrl: "/images/sm11.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/hemanth-k-r-448270296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Innovation is my driving force",
  },
  {
    id: 12,
    name: "Keerthi Lakshmi P",
    role: "Senior Member",
    imageUrl: "/images/sm12.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/keerthi-lakshmi-prabakar-723032290?trk=contact-info",
    oneLiner:
      "My ideas are like popcorn—popping up at random, a little messy, but always entertaining!",
  },
  {
    id: 13,
    name: "Kirthana V",
    role: "Senior Member",
    imageUrl: "/images/sm13.png",
    linkedinUrl: "https://www.linkedin.com/in/kirthana-v-b9985b291",
    oneLiner: "The secret to life....a dash of vodka and lemon!!",
  },
  {
    id: 14,
    name: "Laksiya A",
    role: "Senior Member",
    imageUrl: "/images/sm14.jpg",
    linkedinUrl: "https://www.linkedin.com/in/laksiya-anbukumaran",
    oneLiner: "Work till i drop",
  },
  {
    id: 15,
    name: "Leena K",
    role: "Senior Member",
    imageUrl: "/images/sm15.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/leena-kamalanadhan-047922295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Enjoying the journey, one peaceful moment at a time.",
  },
  {
    id: 16,
    name: "S.Logeshwari",
    role: "Senior Member",
    imageUrl: "/images/sm16.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/s-logeshwari-33b154299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner:
      "I am an optimistic person and a self driven individual who look upto learn from new challenges.",
  },
  {
    id: 17,
    name: "Maadhangi M",
    role: "Senior Member",
    imageUrl: "/images/sm17.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/maadhangi-m-816951295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner:
      "From dreams to reality, difference is made by pushing past our limits.",
  },
  {
    id: 18,
    name: "Michelle Sarah David",
    role: "Senior Member",
    imageUrl: "/images/sm18.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/michelle-sarah-a52682261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner:
      "Denial is a river in Egypt, and I’m happily paddling upstream :)",
  },
  {
    id: 19,
    name: "Mithil Hariharan",
    role: "Senior Member",
    imageUrl: "/images/sm19.jpg",
    linkedinUrl: "http://linkedin.com/in/mithil-hariharan-3b0b54270",
    oneLiner: "Life’s too short for stock rides and slow lanes",
  },
  {
    id: 20,
    name: "MOHAMMED KALEEMULLA A R H",
    role: "Senior Member",
    imageUrl: "/images/sm20.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/mohammed-kaleemullah-a-r-573bab296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner:
      "I'm Kaleemullah, a dedicated Computer Science student with a passion for learning and problem-solving.",
  },
  {
    id: 21,
    name: "Mohammad Uzeir A",
    role: "Senior Member",
    imageUrl: "/images/sm21.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mohammad-uzeir-739609216/",
    oneLiner: "Inhale confidence, Exhale Doubt",
  },
  {
    id: 22,
    name: "Pavithra B",
    role: "Senior Member",
    imageUrl: "/images/sm22.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/pavithra-baskaran-9b59b51a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Oh! I can fly?",
  },
  {
    id: 23,
    name: "Pavithra V",
    role: "Senior Member",
    imageUrl: "/images/sm23.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pavithra-vannisamy-9718a4256/",
    oneLiner: "It is never too late to be what you might have been",
  },
  {
    id: 24,
    name: "Pavithraa Jawahar",
    role: "Senior Member",
    imageUrl: "/images/sm24.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/pavithraa-jawahar-1a835a249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Celebrating the little things!!",
  },
  {
    id: 25,
    name: "Pratyush Iyer",
    role: "Senior Member",
    imageUrl: "/images/sm25.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/pratyush-iyer-697608234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    oneLiner: "Ready to face challenges and a dedicated team worker",
  },
  {
    id: 26,
    name: "Prisha",
    role: "Senior Member",
    imageUrl: "/images/sm26.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/prisha-s-0a3805190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    oneLiner: "To live will be an awfully big adventure",
  },
  {
    id: 27,
    name: "M RAMANATHAN",
    role: "Senior Member",
    imageUrl: "/images/sm27.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ramanathan-muthukumar-00329224a",
    oneLiner:
      "A beacon of positivity and determination, fueled by an insatiable passion for learning and an unmatched work ethic.",
  },
  {
    id: 28,
    name: "Sanjay",
    role: "Senior Member",
    imageUrl: "/images/sm28.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sanjay-sathish-kumar-6330b5296",
    oneLiner: "Its no fun if I know what's going to happen.",
  },
  {
    id: 29,
    name: "Shruthe",
    role: "Senior Member",
    imageUrl: "/images/sm29.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shruthe-r-d-82611a256/",
    oneLiner: "Live as if you were to die tomorrow.",
  },
  {
    id: 30,
    name: "SG SHRUTI",
    role: "Senior Member",
    imageUrl: "/images/sm30.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shruti-s-220321134/",
    oneLiner: "Determined, resilient, and always reaching for the stars",
  },
  {
    id: 31,
    name: "Shruti v",
    role: "Senior Member",
    imageUrl: "/images/sm31.jpg",
    linkedinUrl: "1",
    oneLiner: "I'm quite nice actually ;)",
  },
  {
    id: 32,
    name: "Sidharth Harish M",
    role: "Senior Member",
    imageUrl: "/images/sm32.jpg",
    linkedinUrl: "",
    oneLiner: "Whispering dreams into existence",
  },
  {
    id: 33,
    name: "Sneha Sekaran",
    role: "Senior Member",
    imageUrl: "/images/sm33.jpg",
    linkedinUrl: "",
    oneLiner: "High functioning Sociopath",
  },
  {
    id: 34,
    name: "Sowmiya R",
    role: "Senior Member",
    imageUrl: "/images/sm34.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/sowmiya-r-2721b0266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "A flower does not compete with others, it just blooms.",
  },
  {
    id: 35,
    name: "Sowmiya.S.R",
    role: "Senior Member",
    imageUrl: "/images/sm35.png",
    linkedinUrl: "",
    oneLiner:
      "A girl who loves to be with people and challenges herself to do the best.",
  },
  {
    id: 36,
    name: "Sowndarya S",
    role: "Senior Member",
    imageUrl: "/images/sm36.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/sowndarya-s-815968288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Life has no remote...just get up and change it yourself ",
  },
  {
    id: 37,
    name: "Srimathi R",
    role: "Senior Member",
    imageUrl: "/images/sm37.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/srimathi-r-7774aa287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Star gazing and soul searching 🫧",
  },
  {
    id: 38,
    name: "S Srinidhi",
    role: "Senior Member",
    imageUrl: "/images/sm38.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/srinidhi-s-8a10b927b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "miracles♡",
  },
  {
    id: 39,
    name: "Srinithi.B",
    role: "Senior Member",
    imageUrl: "/images/sm39.jpg",
    linkedinUrl: "https://www.linkedin.com/in/srinithi-b-005207262/",
    oneLiner: "Focused and Passionate",
  },
  {
    id: 40,
    name: "Sruthi S",
    role: "Senior Member",
    imageUrl: "/images/sm40.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sruthi-s-abb06a290",
    oneLiner: "Real, driven, effortlessly cool.",
  },
  {
    id: 41,
    name: "Swaathysri Maheswaran",
    role: "Senior Member",
    imageUrl: "/images/sm41.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/swaathysri-maheswaran-311458288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "A procrastinator, but not a quitter.",
  },
  {
    id: 42,
    name: "Vaishnavi A",
    role: "Senior Member",
    imageUrl: "/images/sm42.jpg",
    linkedinUrl: "https://linkedin.com/in/vaishnavi-arun-050515297",
    oneLiner: "It's a leap of faith",
  },
  {
    id: 43,
    name: "VAISHNAVI MADABHUSHI",
    role: "Senior Member",
    imageUrl: "/images/sm43.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/vaishnavi-madabhushi-716072287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner:
      "Just here to drop some casual brilliance and disappear like I wasn’t even trying",
  },
  {
    id: 44,
    name: "Varssha",
    role: "Senior Member",
    imageUrl: "/images/sm44.jpg",
    linkedinUrl: "https://www.linkedin.com/in/varssha-balasubramani-318190299/",
    oneLiner: "Atttempt the impossible!",
  },
  {
    id: 45,
    name: "Vedhavalli S",
    role: "Senior Member",
    imageUrl: "/images/sm45.jpg",
    linkedinUrl: "https://in.linkedin.com/in/vedhavalli-sarkunnan-183a35295",
    oneLiner: "Born to yap, forced to shut up",
  },
  {
    id: 46,
    name: "VEERA MANIKANDAN A",
    role: "Senior Member",
    imageUrl: "/images/sm46.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/veera-manikandan-6aa8a825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "A Life Enthusiast With Better Knowledge About World.",
  },
  {
    id: 47,
    name: "S.K.Vikash",
    role: "Senior Member",
    imageUrl: "/images/sm47.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vikash07/",
    oneLiner: "I am sportive and engaging guy",
  },
  {
    id: 48,
    name: "VINAYA B",
    role: "Senior Member",
    imageUrl: "/images/sm48.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vinaya-b-96a67a293",
    oneLiner:
      "I pick up things quickly, get a bit thrown off, but I always bounce back to claim the next win.",
  },
  {
    id: 49,
    name: "J Vishnu",
    role: "Senior Member",
    imageUrl: "/images/sm49.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/vishnu-janardhanan-b029aa299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    oneLiner: "Hamilton is great but Verstappen is just better",
  },
  {
    id: 50,
    name: "Yaaminy S K",
    role: "Senior Member",
    imageUrl: "/images/sm50.jpg",
    linkedinUrl: "https://www.linkedin.com/in/yaaminy-karthik-6b9583287/",
    oneLiner: "Don't just exist. LIVE!",
  },
  {
    id: 51,
    name: "Abarna Chawla",
    role: "Senior Member",
    imageUrl: "/images/sm51.jpg",
    linkedinUrl: "https://www.linkedin.com/in/abarna-chawla-a27630297",
    oneLiner:
      "Someone who thrives on curiosity and enjoys learning new things.",
  },
  {
    id: 52,
    name: "Abhinaya V",
    role: "Senior Member",
    imageUrl: "/images/sm52.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/abhinaya-vijayakumar-120786312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Take the risk or lose the chance",
  },
  {
    id: 53,
    name: "Abishek M",
    role: "Senior Member",
    imageUrl: "/images/sm53.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/abishek-m-a92903236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    oneLiner: "Live as if you were to die tomorrow.",
  },
  {
    id: 54,
    name: "ABU SATHIK AFRIDI S",
    role: "Senior Member",
    imageUrl: "/images/sm54.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/abu-sathik-afridi-s-eee-10781a31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "A potential engineer with crazy ideas ",
  },
  {
    id: 55,
    name: "Adhitya M",
    role: "Senior Member",
    imageUrl: "/images/sm55.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/adhitya-m-516a5a2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Escaping Reality !",
  },
  {
    id: 56,
    name: "Akshaya K",
    role: "Senior Member",
    imageUrl: "/images/sm56.jpg",
    linkedinUrl: "https://www.linkedin.com/in/akshaya-k-317844325",
    oneLiner: "A human.Being.",
  },
  {
    id: 57,
    name: "Angeline Jenisha V",
    role: "Senior Member",
    imageUrl: "/images/sm57.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/angeline-jenisha-v-189204321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner:
      "Tech enthusiast dedicated to simplifying complex problems with innovative solutions",
  },
  {
    id: 58,
    name: "ARAVINDHAN L",
    role: "Senior Member",
    imageUrl: "/images/sm58.jpg",
    linkedinUrl: "https://www.linkedin.com/in/senior-member-58",
    oneLiner:
      "An enthusiastic learner, eager to explore new chapters of life with curiosity and passion./",
  },
  {
    id: 59,
    name: "Bawadharani Sree. R",
    role: "Senior Member",
    imageUrl: "/images/sm59.jpg",
    linkedinUrl: "www.linkedin.com/in/bawadharani-sree-ramakrishnan-97a638218",
    oneLiner: "Smiling through the chaos, because why not?",
  },
  {
    id: 60,
    name: "Bhagya Shree S",
    role: "Senior Member",
    imageUrl: "/images/sm60.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/s-bhagya-shree-b9079a255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner:
      "Free yourself from the comfort zone and explore all the opportunities, one step at a time ;)",
  },
  {
    id: 61,
    name: "Bharathraj",
    role: "Senior Member",
    imageUrl: "/images/sm61.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/bharathraj-ranjith-kumar-aa5162294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Spins on stage, spirals in Mind",
  },
  {
    id: 62,
    name: "Bhavishya.V",
    role: "Senior Member",
    imageUrl: "/images/sm62.jpg",
    linkedinUrl: "https://www.linkedin.com/in/senior-member-62",
    oneLiner: "Live fast, die young",
  },
  {
    id: 63,
    name: "Bhishma Kumar A",
    role: "Senior Member",
    imageUrl: "/images/sm63.jpg",
    linkedinUrl: "https://www.linkedin.com/in/bhishmakumar24/",
    oneLiner: "sic.parvis.magna",
  },
  {
    id: 64,
    name: "Deepthi MG",
    role: "Senior Member",
    imageUrl: "/images/sm64.png",
    linkedinUrl:
      "https://www.linkedin.com/in/deepthimg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "If I'm told to write even a one liner, I'll sleep",
  },
  {
    id: 65,
    name: "Devasena C A S",
    role: "Senior Member",
    imageUrl: "/images/sm65.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/devasena-cas-8570242a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    oneLiner: "Agile, enthusiastic, no regrets.",
  },
  {
    id: 66,
    name: "K Dhiraj",
    role: "Senior Member",
    imageUrl: "/images/sm66.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/dhiraj-kumaraguru-88b29a299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Rejoice in solitude ",
  },
  {
    id: 67,
    name: "Harini Chinnasamy",
    role: "Senior Member",
    imageUrl: "/images/sm67.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/harini-chinnasamy-577209291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Fake it till you Make it",
  },
  {
    id: 68,
    name: "Harini S",
    role: "Senior Member",
    imageUrl: "/images/sm68.jpg",
    linkedinUrl: "https://www.linkedin.com/in/harini-swaminathan-86581b291/",
    oneLiner: "Turning sparks into stories",
  },
  {
    id: 69,
    name: "Harish M",
    role: "Senior Member",
    imageUrl: "/images/sm69.jpg",
    linkedinUrl: "linkedin.com/in/harish-m-051014328",
    oneLiner: "Nimble, Adaptive learner",
  },
  {
    id: 70,
    name: "Harshinivarsa S.K",
    role: "Senior Member",
    imageUrl: "/images/sm70.jpg",
    linkedinUrl: "www.linkedin.com/in/harshinivarsa-s-k-494950290",
    oneLiner: "Heartful thought decides. ",
  },
  {
    id: 71,
    name: "Harshitha S",
    role: "Senior Member",
    imageUrl: "/images/sm71.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/harshitha-s-b7a01a2a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Chasing growth, not perfection ",
  },
  {
    id: 72,
    name: "Kabenesh BV",
    role: "Senior Member",
    imageUrl: "/images/sm72.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kabenesh-bv-0a9b7b276/",
    oneLiner: "Aspiring Android App and Web Developer | Tech enthusiast",
  },
  {
    id: 73,
    name: "Kalpanapriyadharshini A",
    role: "Senior Member",
    imageUrl: "/images/sm73.png",
    linkedinUrl: "https://www.linkedin.com/in/senior-member-73",
    oneLiner:
      "I am an enthusiastic, resilient , organised and ambitious person",
  },
  {
    id: 74,
    name: "Madhavan S",
    role: "Senior Member",
    imageUrl: "/images/sm74.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/madhavan-s-73581217659710121720?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner:
      "An evolving story of passion, learning, and endless possibilities",
  },
  {
    id: 75,
    name: "Madhumitha R",
    role: "Senior Member",
    imageUrl: "/images/sm75.jpg",
    linkedinUrl: "https://www.linkedin.com/in/madhumitha-ravi-36a21732b",
    oneLiner:
      "Driven by creativity and strong work ethic, I approach every project with enthusiasm",
  },
  {
    id: 76,
    name: "Madhushree SN",
    role: "Senior Member",
    imageUrl: "/images/sm76.jpg",
    linkedinUrl: "www.linkedin.com/in/madhushree-naga",
    oneLiner: "I panicked and pressed buttons, life said “you’re hired.” ",
  },
  {
    id: 77,
    name: "Meenakshi M",
    role: "Senior Member",
    imageUrl: "/images/sm77.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/meenakshi-manivannan-254ab224b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    oneLiner:
      "I am an enthusiastic learner, eager to explore and grow across diverse fields",
  },
  {
    id: 78,
    name: "Megha Rajeevan",
    role: "Senior Member",
    imageUrl: "/images/sm78.jpg",
    linkedinUrl: "www.linkedin.com/in/megha-rajeevan-b13129330",
    oneLiner:
      "A dynamic thinker and enthusiastic collaborator, excited to bring fresh ideas and positive energy to our college community",
  },
  {
    id: 79,
    name: "Mhadhurra Chandran",
    role: "Senior Member",
    imageUrl: "/images/sm79.jpg",
    linkedinUrl: "http://linkedin.com/in/mhadhurra-chandran-a0576b321",
    oneLiner: "DND",
  },
  {
    id: 80,
    name: "Nagappan VRA",
    role: "Senior Member",
    imageUrl: "/images/sm80.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/nagappan-veerappan-ab10b2295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "It is never too late to be what you might have been:)",
  },
  {
    id: 81,
    name: "Nandana S",
    role: "Senior Member",
    imageUrl: "/images/sm81.jpg",
    linkedinUrl: "https://www.linkedin.com/in/senior-member-56",
    oneLiner: "One day at a time 🦋",
  },
  {
    id: 82,
    name: "S. Nandita",
    role: "Senior Member",
    imageUrl: "/images/sm82.jpg",
    linkedinUrl: "https://www.linkedin.com/in/nandita-saravanan-07366432a",
    oneLiner: "Loves to explore and interact with others.",
  },
  {
    id: 83,
    name: "Padmaja",
    role: "Senior Member",
    imageUrl: "/images/sm83.jpg",
    linkedinUrl: "https://www.linkedin.com/in/padmaja-senthilkumar-4178b4213",
    oneLiner: "Embracing my inner bliss",
  },
  {
    id: 84,
    name: "Pranav AV",
    role: "Senior Member",
    imageUrl: "/images/sm84.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/pranav-a-v-4a0348296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    oneLiner: "I am a second year IT student who enjoys gaming",
  },
  {
    id: 85,
    name: "Rajalakshmi",
    role: "Senior Member",
    imageUrl: "/images/sm85.jpg",
    linkedinUrl: "https://www.linkedin.com/in/rajalakshmi-a-a5a0532b2/ ",
    oneLiner:
      "It is our choices that show what we truly are, far more than our abilities",
  },
  {
    id: 86,
    name: "Rajsuvetha V",
    role: "Senior Member",
    imageUrl: "/images/sm86.jpg",
    linkedinUrl: "https://www.linkedin.com/in/rajsuvetha-v-891163321",
    oneLiner: "Just going with the flow!",
  },
  {
    id: 87,
    name: "Sanjay S",
    role: "Senior Member",
    imageUrl: "/images/sm87.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/sanjay-shanmugam-a7b38432b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Part time learner, Full time Car-Enthusiast",
  },
  {
    id: 88,
    name: "Sanjeth S",
    role: "Senior Member",
    imageUrl: "/images/sm88.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/sanjeth-s-0721ab321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    oneLiner: "Living life in the fast lane ",
  },
  {
    id: 89,
    name: "Shree Kheerthi Agrathaa N",
    role: "Senior Member",
    imageUrl: "/images/sm89.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/shree-kheerthi-agrathaa-napa-201652255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    oneLiner: "This and That...its all about holistic abunDANCE!",
  },
  {
    id: 90,
    name: "Shreya V",
    role: "Senior Member",
    imageUrl: "/images/sm90.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/shreya-venkat-516a10304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner:
      "Here to contribute ideas , collab with peers and enjoy the Forese experience! ",
  },
  {
    id: 91,
    name: "S Sharmile",
    role: "Senior Member",
    imageUrl: "/images/sm91.jpg",
    linkedinUrl: "www.linkedin.com/in/s-sharmile-02b081291",
    oneLiner: "The Purpose of Life is the Expansion of Happiness",
  },
  {
    id: 92,
    name: "Shri Vignesh S",
    role: "Senior Member",
    imageUrl: "/images/sm92.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shri-vignesh-s/",
    oneLiner: "Smile big, trouble’s still tiny.",
  },
  {
    id: 93,
    name: "Shrinidhi Dasaraty",
    role: "Senior Member",
    imageUrl: "/images/sm93.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shrinidhi-dasaraty-0ab1a8321/",
    oneLiner: "Grind now, glow later",
  },
  {
    id: 94,
    name: "Shriram Narasimhan",
    role: "Senior Member",
    imageUrl: "/images/sm94.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/shriram-narasimhan-83bb5529b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Stay orginal and let the world copy you",
  },
  {
    id: 95,
    name: "Smirithi P",
    role: "Senior Member",
    imageUrl: "/images/sm95.jpg",
    linkedinUrl: "https://www.linkedin.com/in/smirithi-premanand-705534277",
    oneLiner: "It’s all about timing ;)",
  },
  {
    id: 96,
    name: "Sri Ananya I",
    role: "Senior Member",
    imageUrl: "/images/sm96.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/ananya-undefined-0292a7293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Lowkey personality with high key intrusive thoughts",
  },
  {
    id: 97,
    name: "Tejaswini K",
    role: "Senior Member",
    imageUrl: "/images/sm97.jpg",
    linkedinUrl: "www.linkedin.com/in/tejaswini-k-753976318",
    oneLiner: "Calm.Confident.Consistent.",
  },
  {
    id: 98,
    name: "Tejaswini R",
    role: "Senior Member",
    imageUrl: "/images/sm98.jpg",
    linkedinUrl: "https://www.linkedin.com/in/senior-member-73",
    oneLiner: "I tend to keep talking 'til somebody stops me.",
  },
  {
    id: 99,
    name: "Thanneermalai S",
    role: "Senior Member",
    imageUrl: "/images/sm99.jpg",
    linkedinUrl: "www.linkedin.com/in/tejaswini-r-4303322b0",
    oneLiner: "Focus over frenzy",
  },
  {
    id: 100,
    name: "G. Thirukumaran",
    role: "Senior Member",
    imageUrl: "/images/sm100.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/thirukumaran-g-5630792a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner:
      "I enjoy finishing projects early—it’s only professional to make it look like a battle",
  },
  {
    id: 101,
    name: "Thirumurugan.S",
    role: "Senior Member",
    imageUrl: "/images/sm101.jpg",
    linkedinUrl: "https://www.linkedin.com/in/thirumurugan-s-256179321",
    oneLiner: "I’m the plot twist you didn’t see coming",
  },
  {
    id: 102,
    name: "Varshini M",
    role: "Senior Member",
    imageUrl: "/images/sm102.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/varshini-m-734b122b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "Tenacious spirits are driven by determination",
  },
  {
    id: 103,
    name: "Varshitha.M",
    role: "Senior Member",
    imageUrl: "/images/sm103.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/varshitha-m-408823319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    oneLiner: "A blithesome person with a great quest for knowledge",
  },
];

export const members: Member[] = [
  {
    id: 1,
    name: "Aadhithya Narayanan A",
    role: "Member",
    imageUrl: "/images/m1.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aadhithyanarayanan/",
    oneLiner: "No cap, just curiosity.",
  },
  {
    id: 2,
    name: "Aadithya R",
    role: "Member",
    imageUrl: "/images/m2.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aadithya-ark/",
    oneLiner: "To infinity and beyond.",
  },
  {
    id: 3,
    name: "Abayambal",
    role: "Member",
    imageUrl: "/images/m3.jpg",
    linkedinUrl: "https://www.linkedin.com/in/abayambal-duraisamy-813889326/",
    oneLiner: "Engineer in the making, thinker by default",
  },
  {
    id: 4,
    name: "Abhimanyu Singh Bhati",
    role: "Member",
    imageUrl: "/images/m4.jpg",
    linkedinUrl: "https://www.linkedin.com/in/abhimanyu-singh-bhati-7255a0328/",
    oneLiner: "Easygoing person who loves stories, people, and experiences.",
  },
  {
    id: 5,
    name: "Abrar",
    role: "Member",
    imageUrl: "/images/m5.jpg",
    linkedinUrl: "https://www.linkedin.com/in/abrar-a-3089ab327/",
    oneLiner: "It's not Arrogance if I'm always right",
  },
  {
    id: 6,
    name: "Akshara Srivatsan",
    role: "Member",
    imageUrl: "/images/m6.jpg",
    linkedinUrl: "https://www.linkedin.com/in/akshara-srivatsan-2791b5328/",
    oneLiner: "Keeping ideas flowing and spirits high—that's my jam.",
  },
  {
    id: 7,
    name: "Ananya K",
    role: "Member",
    imageUrl: "/images/m7.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ananyakannan07/",
    oneLiner: "Brains, sass, and a passport full of dreams.",
  },
  {
    id: 8,
    name: "Ashwin Kumar",
    role: "Member",
    imageUrl: "/images/m8.jpg",
    linkedinUrl: "https://www.linkedin.com/in/t-r-ashwin-kumar-cse-8b1627327/",
    oneLiner: "A guy who is always ready to learn new things ",
  },
  {
    id: 9,
    name: "Athmaja G",
    role: "Member",
    imageUrl: "/images/m9.jpg",
    linkedinUrl: "https://www.linkedin.com/in/athmaja-gugan-42251631a/",
    oneLiner: "I hate clouds that look like other clouds.",
  },
  {
    id: 10,
    name: "Barshana Rani T",
    role: "Member",
    imageUrl: "/images/m10.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/barshana-rani-thothathiri-013745321/",
    oneLiner:
      "At the intersection of code and cells, I aspire to transform ideas into breakthroughs.",
  },
  {
    id: 11,
    name: "Bhushika R",
    role: "Member",
    imageUrl: "/images/m11.jpg",
    linkedinUrl: "https://www.linkedin.com/in/bhushika-rameshbabu-3791b4341/",
    oneLiner:
      "Someone who enjoys bringing ideas to life and quietly making a difference in every team I’m part of.",
  },
  {
    id: 12,
    name: "Devadharshini SA",
    role: "Member",
    imageUrl: "/images/m12.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/devadharshini-s-a-6884https://www.linkedin.com/in/devadharshinisa07/",
    oneLiner: "Designing Today , Defining Tomorrow ",
  },
  {
    id: 13,
    name: "Dharshika Sampathkumar",
    role: "Member",
    imageUrl: "/images/m13.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/dharshika-sampathkumar-52038a354/",
    oneLiner: "Driven by curiosity, powered by Passion.",
  },
  {
    id: 14,
    name: "Divyashree M",
    role: "Member",
    imageUrl: "/images/m14.jpg",
    linkedinUrl: "https://www.linkedin.com/in/divya-shree-m-09531631a/",
    oneLiner:
      "I’m an optimistic person who loves coding, connecting with people, and making life wonderful.",
  },
  {
    id: 15,
    name: "Guhan Kallapiran",
    role: "Member",
    imageUrl: "/images/m15.jpg",
    linkedinUrl: "https://www.linkedin.com/in/guhan-kallapiran-613470286/",
    oneLiner: "Hesitation is defeat",
  },
  {
    id: 16,
    name: "Grisler Paul J",
    role: "Member",
    imageUrl: "/images/m16.jpg",
    linkedinUrl: "https://www.linkedin.com/in/grisler-paul-033aa1330/",
    oneLiner: "Quiet moves,loud results",
  },
  {
    id: 17,
    name: "Harini K",
    role: "Member",
    imageUrl: "/images/m17.jpg",
    linkedinUrl: "https://www.linkedin.com/in/harini-karthikeyan-2909302ba/",
    oneLiner: "Existence : loading…",
  },
  {
    id: 18,
    name: "Hirthik Mageshkumar",
    role: "Member",
    imageUrl: "/images/m18.png",
    linkedinUrl: "https://www.linkedin.com/in/hirthik-mageshkumar",
    oneLiner: "Focused on results with integrity",
  },
  {
    id: 19,
    name: "Ilankavi K",
    role: "Member",
    imageUrl: "/images/m19.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ilankavi-kathiravan-5a8b851bb/",
    oneLiner: "Building my path, one step at a time.",
  },
  {
    id: 20,
    name: "Jashwanth Shankar B",
    role: "Member",
    imageUrl: "/images/m20.jpg",
    linkedinUrl: "https://www.linkedin.com/in/b-jashwanth-shankar-791a27327/",
    oneLiner: "Crafting simplicity with impact ",
  },
  {
    id: 21,
    name: "Kailash S",
    role: "Member",
    imageUrl: "/images/m21.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kailash-s-832501236/",
    oneLiner: "Be the change that you wish to see in the world ",
  },
  {
    id: 22,
    name: "Kavya J",
    role: "Member",
    imageUrl: "/images/m22.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kavya-ganesh-428411354/",
    oneLiner: "Be the change that you wish to see in the world ",
  },
  {
    id: 23,
    name: "Kishore Natrajan",
    role: "Member",
    imageUrl: "/images/m23.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kishore-natrajan-569566331/",
    oneLiner: "Quiet energy until it’s my scene ",
  },
  {
    id: 24,
    name: "Lathika R",
    role: "Member",
    imageUrl: "/images/m24.jpg",
    linkedinUrl: "https://www.linkedin.com/in/lathika-ramachandran-b58297328/",
    oneLiner: "Make today count!",
  },
  {
    id: 25,
    name: "Mayooritha P",
    role: "Member",
    imageUrl: "/images/m25.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/mayooritha-pugazhenthi-8a43b0327/",
    oneLiner: "Hustle, but stay human",
  },
  {
    id: 26,
    name: "Mirthun KS",
    role: "Member",
    imageUrl: "/images/m26.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mirthun-k-s-858b7a204",
    oneLiner:
      "Carving out my path with love, grateful for the self I am becoming",
  },
  {
    id: 27,
    name: "Mohamed Shek Althaaf F",
    role: "Member",
    imageUrl: "/images/m27.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mohamed-shek-althaaf-717b1b326/",
    oneLiner: "Show up!!",
  },
  {
    id: 28,
    name: "Mridula SA",
    role: "Member",
    imageUrl: "/images/m28.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mridulasa/",
    oneLiner: "Just here",
  },
  {
    id: 29,
    name: "Nikhil Abisheik ES",
    role: "Member",
    imageUrl: "/images/m29.jpg",
    linkedinUrl: "https://www.linkedin.com/in/nikhil-abisheik-es",
    oneLiner: "Highest in the room",
  },
  {
    id: 30,
    name: "Nivethetha V",
    role: "Member",
    imageUrl: "/images/m30.jpg",
    linkedinUrl: "https://www.linkedin.com/in/nivethetha-v-51b032327/",
    oneLiner: "Strategic learner with a vision for impact.",
  },
  {
    id: 31,
    name: "Palanichandar Ramalingam",
    role: "Member",
    imageUrl: "/images/m31.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/palanichandar-ramalingam-55243131b/",
    oneLiner:
      "Living with confidence , working with purpose and walking with faith",
  },
  {
    id: 32,
    name: "Pragadheeswaran",
    role: "Member",
    imageUrl: "/images/m32.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pragadeesh-s-7a6a5a352/",
    oneLiner: "On the grind!",
  },
  {
    id: 33,
    name: "Praneet G",
    role: "Member",
    imageUrl: "/images/m33.png",
    linkedinUrl: "https://www.linkedin.com/in/praneet-g-361b22385/",
    oneLiner:
      "I am passionate about solving problems in creative ways and love connecting with people to share ideas and inspire each other.",
  },
  {
    id: 34,
    name: "Pranaya M",
    role: "Member",
    imageUrl: "/images/m34.jpg",
    linkedinUrl: "https://www.linkedin.com/in/m-pranaya-576842383/",
    oneLiner:
      "I am a dedicated and hardworking person with good communication skills.",
  },
  {
    id: 35,
    name: "Pravin Kumaar DS",
    role: "Member",
    imageUrl: "/images/m35.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pravin-kumaar-d-s-587ba1359/",
    oneLiner: "I am an enthusiastic engineer ",
  },
  {
    id: 36,
    name: "Prithivikaa D",
    role: "Member",
    imageUrl: "/images/m36.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/prithivikaa-dharanipathi-b99584384/",
    oneLiner: "Be Obsessed With Your Own Potential",
  },
  {
    id: 37,
    name: "Raghav GS",
    role: "Member",
    imageUrl: "/images/m37.jpg",
    linkedinUrl: "https://www.linkedin.com/in/raghav-gs-41994635a/",
    oneLiner: "First I mine, then I craft",
  },
  {
    id: 38,
    name: "Sakthi Rasagnya R",
    role: "Member",
    imageUrl: "/images/m38.jpg",
    linkedinUrl: "https://www.linkedin.com/in/r-sakthi-rasagnya-41b2b032a/",
    oneLiner: "Fueled by passion, powered by joy.",
  },

  {
    id: 39,
    name: "Sam Joshua S",
    role: "Member",
    imageUrl: "/images/m39.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sam-joshua-a0102a289/",
    oneLiner:
      "You either die a hero, or you live long enough to see yourself become the villain.",
  },
  {
    id: 40,
    name: "Sangavai GK",
    role: "Member",
    imageUrl: "/images/m40.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sangavai-g-k-ad-033514330/",
    oneLiner: "Wildcard ",
  },
  {
    id: 41,
    name: "Sanjay Joshua",
    role: "Member",
    imageUrl: "/images/m41.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sanjay-joshua-96a058331/",
    oneLiner: "My moto is simple Listen! Learn! Lead! .",
  },
  {
    id: 42,
    name: "Sanjay Srinivasan B",
    role: "Member",
    imageUrl: "/images/m42.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sanjay-srinivasan-b-49a50a361/",
    oneLiner:
      "Aspiring ECE student and active Foresce Club member, driven to excel in placements and beyond.",
  },
  {
    id: 43,
    name: "Sanjitha",
    role: "Member",
    imageUrl: "/images/m43.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sanjitha-ravishankar-b2143b319/",
    oneLiner: "Half chaos, half chill, half me!",
  },

  {
    id: 44,
    name: "Sarabesh Adithya D",
    role: "Member",
    imageUrl: "/images/m44.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sarabesh-adithya-d-966499329/",
    oneLiner: "Chasing The apex",
  },
  {
    id: 45,
    name: "Sathyakaman KS",
    role: "Member",
    imageUrl: "/images/m45.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sathyakaman-k-s-71a769327/",
    oneLiner: "I’d agree with you, but then we’d both be wrong.",
  },
  {
    id: 46,
    name: "Shaik Aadhil S",
    role: "Member",
    imageUrl: "/images/m46.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shaik-aadhil-565469316/",
    oneLiner: "Im not a business man. I am the business, man",
  },
  {
    id: 47,
    name: "Shabreen S",
    role: "Member",
    imageUrl: "/images/m47.jpg",
    linkedinUrl: "hhttps://www.linkedin.com/in/shabreen-shajahan-7084b1327/",
    oneLiner: "The most courageous act is to still think for yourself. Aloud.",
  },

  {
    id: 48,
    name: "Shamritha",
    role: "Member",
    imageUrl: "/images/m48.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shamritha-s-87b635283/",
    oneLiner: "Too rare to relate , sarcasm solves all ! ",
  },
  {
    id: 49,
    name: "Shawn Abraham Joseph L",
    role: "Member",
    imageUrl: "/images/m49.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shawn-abraham-joseph-3b2417329/",
    oneLiner:
      "If you want to win the lottery, you have to make the money to buy the ticket.",
  },
  {
    id: 50,
    name: "Shobana R",
    role: "Member",
    imageUrl: "/images/m50.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shobana-r-b15240334/",
    oneLiner: "Do not live someone else’s script. Write your own story",
  },
  {
    id: 51,
    name: "Shree Vidhya S",
    role: "Member",
    imageUrl: "/images/m51.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/shree-vidhya-somasundaram-2033ba327/",
    oneLiner:
      "I’m just a curious soul who enjoys figuring things out and having fun along the way.",
  },
  {
    id: 52,
    name: "Shreenidhi C",
    role: "Member",
    imageUrl: "/images/m52.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/shreenidhi-chandrasekaran-829400327/",
    oneLiner:
      "Curious and passion-driven individual with a friendly demeanor. ",
  },
  {
    id: 53,
    name: "Shrenik BS",
    role: "Member",
    imageUrl: "/images/m53.jpg",
    linkedinUrl: "https://www.linkedin.com/in/bsshrenik/",
    oneLiner: "My vibe is my signature",
  },
  {
    id: 54,
    name: "Sree Varshini S",
    role: "Member",
    imageUrl: "/images/m54.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/sreevarshini-surendran-83ab56311/",
    oneLiner: "Low-key. On purpose.",
  },
  {
    id: 55,
    name: "Srikanth T",
    role: "Member",
    imageUrl: "/images/m55.jpg",
    linkedinUrl: "https://www.linkedin.com/in/srikanth-thazhalan-881597338/",
    oneLiner: "In my defence I was bored.",
  },
  {
    id: 56,
    name: "Srinidhi S",
    role: "Member",
    imageUrl: "/images/m56.jpg",
    linkedinUrl: "https://www.linkedin.com/in/srinidhi-sarasija-259a61299/",
    oneLiner:
      "I no longer dislike Mondays, I'm mature now. I dislike the whole week.",
  },
  {
    id: 57,
    name: "Sai Harini BS",
    role: "Member",
    imageUrl: "/images/m57.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sai-harini-suresh-7a090a357/",
    oneLiner: "Super poor kids with nothing but cool friends",
  },
  {
    id: 58,
    name: "Sai Srutthe",
    role: "Member",
    imageUrl: "/images/m58.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/sai-srutthe-saravana-kumar-263122359/",
    oneLiner: "Focused on Progress.",
  },
  {
    id: 59,
    name: "Sowmiya R",
    role: "Member",
    imageUrl: "/images/m59.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sowmiya-r-838058327/",
    oneLiner: "Chasing growth, not perfection.",
  },

  {
    id: 60,
    name: "Tanish S",
    role: "Member",
    imageUrl: "/images/m60.jpg",
    linkedinUrl: "https://www.linkedin.com/in/tanish-s-121662327/",
    oneLiner: "Curious, cooperative and everlearning. ",
  },
  {
    id: 61,
    name: "Thanya Singh",
    role: "Member",
    imageUrl: "/images/m61.jpg",
    linkedinUrl: "https://www.linkedin.com/in/thanya-singh-a07259328/",
    oneLiner:
      "I ask questions like a pro , organize the answers like a perfectionist",
  },
  {
    id: 62,
    name: "Tharun Vel K",
    role: "Member",
    imageUrl: "/images/m62.jpg",
    linkedinUrl: "https://www.linkedin.com/in/k-tharun-vel-4495a4338/",
    oneLiner: "Just a curious mind with a relaxed vibe",
  },
  {
    id: 63,
    name: "Thirushan SR",
    role: "Member",
    imageUrl: "/images/m63.jpg",
    linkedinUrl: "",
    oneLiner: "Where creativity meets impact.",
  },
  {
    id: 64,
    name: "Vaishnavi Chitraa M",
    role: "Member",
    imageUrl: "/images/m64.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-chitraa-m-4226a1385/",
    oneLiner: "Peace in mind, Joy in heart",
  },
  {
    id: 65,
    name: "Vanishri",
    role: "Member",
    imageUrl: "/images/m65.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vani-shri-55575b327/",
    oneLiner: "I wonder freely, wander endlessly and shine fearlessly.",
  },
  {
    id: 66,
    name: "Vanthana R",
    role: "Member",
    imageUrl: "/images/m66.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vanthana-raj",
    oneLiner: "Shining among the star's within me ",
  },
  {
    id: 67,
    name: "Vikhashini S",
    role: "Member",
    imageUrl: "/images/m67.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vikhashini-s-2a8295328/",
    oneLiner: "Don’t chase the spotlight—be the reason it exists.",
  },
  {
    id: 68,
    name: "Vishwanth CR",
    role: "Member",
    imageUrl: "/images/m68.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vishwanth-c-r-097497327/",
    oneLiner: "Just a coder chasing speed, dreams, and greatness ",
  },
  {
    id: 69,
    name: "Viswanathan L",
    role: "Member",
    imageUrl: "/images/m69.jpg",
    linkedinUrl: "https://www.linkedin.com/in/viswanathan-l-159423384/",
    oneLiner: "Fuelled by curiosity, grounded in effort",
  },
  {
    id: 70,
    name: "Yadhunandhan K",
    role: "Member",
    imageUrl: "/images/m70.jpg",
    linkedinUrl: "https://www.linkedin.com/in/yadhunandhan19/",
    oneLiner: "Focused and resilient Engineer in the making.",
  },
];

// Combined Core Members (Senior + Junior)
export const coreMembers: CoreMember[] = [...seniorCoreMembers, ...juniorCoreMembers];
