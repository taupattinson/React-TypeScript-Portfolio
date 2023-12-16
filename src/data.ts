
import f1 from "assets/f1.gif";
import f2 from "assets/f2.gif";
import f3 from "assets/f3.gif";
import f4 from "assets/f4.gif";
import f5 from "assets/f5.jpg";
import f6 from "assets/f6.jpg";
import f7 from "assets/f7.jpg";
import k1 from "assets/k1.jpg";
import k2 from "assets/k2.jpg";
import k3 from "assets/k3.jpg";
import k4 from "assets/k4.gif";
import k5 from "assets/k5.jpg";
import k6 from "assets/k6.gif";
import k7 from "assets/k7.jpg";
import k8 from "assets/k8.gif"; 
import k9 from "assets/k9.jpg";


interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "kotlin",
    img: k1,
    title: "ChatGpt Api",
    link: 'https://github.com/taupattinson/ChatGpt-Kotlin'
    
  },
  
  {
    id: 1,
    category: "kotlin",
    img: k3,
    title: "Weather Forecast Api",
    link: 'https://github.com/taupattinson/Weather-Forecast'
  },
  {
    id: 2,
    category: "kotlin",
    img: k4,
    title: "Xo Game",
    link: 'https://github.com/taupattinson/Xo-Game'
  },
  {
    id: 3,
    category: "kotlin",
    img: k8,
    title: "Memory Game",
    link: 'https://github.com/taupattinson/Memory-Game'
  },
  {
    id: 4,
    category: "kotlin",
    img: k5,
    title: "World News Api",
    link: 'https://github.com/taupattinson/World-News'
  },
  {
    id: 5,
    category: "kotlin",
    img: k6,
    title: "Paint App",
    link: 'https://github.com/taupattinson/Paint-App'
  },
  {
    id: 6,
    category: "kotlin",
    img: k7,
    title: "Battery Information",
    link: 'https://github.com/taupattinson/Battery-Information'
  },
  
  
  {
    id: 7,
    category: "kotlin",
    img: k9,
    title: "Set Wallpaper Kotlin",
    link: 'https://github.com/taupattinson/Wallpaper-Kotlin'
  },
  {
    id: 8,
    category: "kotlin",
    img: k2,
    title: "Text to Speech",
    link: 'https://github.com/taupattinson/Text-to-Speech'
  },
  {
    id: 9,
    category: "flutter",
    img: f1,
    title: "Github Search Bloc",
    link: 'https://github.com/taupattinson/Github-Search-Bloc'
  },
  {
    id: 10,
    category: "flutter",
    img: f2,
    title: "Firebase Login Flutter Bloc",
    link: 'https://github.com/taupattinson/Firebase-Login-Flutter-Bloc'
  },
  {
    id: 11,
    category: "flutter",
    img: f3,
    title: "Todo Flutter Bloc",
    link: 'https://github.com/taupattinson/Todo-Flutter-Bloc'
  },
  {
    id: 12,
    category: "flutter",
    img: f4,
    title: "Weather Flutter Bloc",
    link: 'https://github.com/taupattinson/Weather-Flutter-Bloc'
  },
  {
    id: 13,
    category: "flutter",
    img: f5,
    title: "Safari Browser Flutter",
    link: 'https://github.com/taupattinson/Safari-Browser-Flutter'
  },
  {
    id: 14,
    category: "flutter",
    img: f6,
    title: "Discord Clone Flutter",
    link: 'https://github.com/taupattinson/Discord-Clone-Flutter'
  },
  {
    id: 15,
    category: "flutter",
    img: f7,
    title: "Chess Flutter",
    link: 'https://github.com/taupattinson/Chess-Flutter'
  },
];
