import HTML from './SVG/HTML';
import CSS from './SVG/CSS';
import Tailwindcss from './SVG/Tailwindcss';
import JS from './SVG/JS';
import Reactjs from './SVG/Reactjs';
import MaterialUI from './SVG/Materialui';
import Nodejs from './SVG/Nodejs';
import Express from './SVG/Express';
import Mongodb from './SVG/Mongodb';
import Postgresql from './SVG/Postgresql';
import Mysql from './SVG/Mysql';
import Php from './SVG/Php';
import Python from './SVG/Python';
import Numpy from './SVG/Numpy';
import Pandas from './SVG/Pandas';
import Matplotlib from './SVG/Matplotlib';
import Seaborn from './SVG/Seaborn';
import Scikitlearn from './SVG/Scikitlearn';
import Tensorflow from './SVG/Tensorflow';
import Pytorch from './SVG/Pytorch';
import Keras from './SVG/Keras';
import R from './SVG/R';
import C from './SVG/C';
import Cpp from './SVG/Cpp';
import Git from './SVG/Git';
import Github from './SVG/Github';
import Streamlit from './SVG/Streamlit';
import Postman from './SVG/Postman';
import Docker from './SVG/Docker';
import VSCode from './SVG/Vscode';
import Mail from './SVG/Mail'

import Instagram from './SVG/Instagram';
import Twitter from './SVG/Twitter';
import Telegram from './SVG/Telegram';
import Linkedin from './SVG/Linkedin';
import Codechef from './SVG/Codechef';
import Leetcode from './SVG/Leetcode';
import Codeforces from './SVG/Codeforces';

import CodeWithUs1 from './assets/CodeWithUs/CodeWithUs1.png'
import CodeWithUs2 from './assets/CodeWithUs/CodeWithUs2.png'
import CodeWithUs3 from './assets/CodeWithUs/CodeWithUs3.png'
import CodeWithUs4 from './assets/CodeWithUs/CodeWithUs4.png'
import CodeWithUs5 from './assets/CodeWithUs/CodeWithUs5.png'

import MoneyMate1 from './assets/MoneyMate/MoneyMate1.png'
import MoneyMate2 from './assets/MoneyMate/MoneyMate2.png'
import MoneyMate3 from './assets/MoneyMate/MoneyMate3.png'
import MoneyMate4 from './assets/MoneyMate/MoneyMate4.png'
import MoneyMate5 from './assets/MoneyMate/MoneyMate5.png'

import SkinDisease1 from './assets/SkinDisease/SkinDisease1.png'
import SkinDisease2 from './assets/SkinDisease/SkinDisease2.png'
import SkinDisease3 from './assets/SkinDisease/SkinDisease3.png'
import SkinDisease4 from './assets/SkinDisease/SkinDisease4.png'
import SkinDisease5 from './assets/SkinDisease/SkinDisease5.png'

import Emotion1 from './assets/Emotion/Emotion1.png'
import Emotion2 from './assets/Emotion/Emotion2.png'
import Emotion3 from './assets/Emotion/Emotion3.png'
import Emotion4 from './assets/Emotion/Emotion4.png'
import Emotion5 from './assets/Emotion/Emotion5.png'

import DogBreed1 from './assets/DogBreed/DogBreed1.png'
import DogBreed2 from './assets/DogBreed/DogBreed2.png'
import DogBreed3 from './assets/DogBreed/DogBreed3.png'
import DogBreed4 from './assets/DogBreed/DogBreed4.png'
import DogBreed5 from './assets/DogBreed/DogBreed5.png'

import Himalaya1 from './assets/Himalaya/Himalaya1.png'
import Himalaya2 from './assets/Himalaya/Himalaya2.png'
import Himalaya3 from './assets/Himalaya/Himalaya3.png'
import Himalaya4 from './assets/Himalaya/Himalaya4.png'
import Himalaya5 from './assets/Himalaya/Himalaya5.png'

import Color1 from './assets/Color/Color1.png'
import Color2 from './assets/Color/Color2.png'
import Color3 from './assets/Color/Color3.png'
import Color4 from './assets/Color/Color4.png'
import Color5 from './assets/Color/Color5.png'

import Portfolio1 from './assets/Portfolio/Portfolio1.png'
import Portfolio2 from './assets/Portfolio/Portfolio2.png'
import Portfolio3 from './assets/Portfolio/Portfolio3.png'
import Portfolio4 from './assets/Portfolio/Portfolio4.png'
import Portfolio5 from './assets/Portfolio/Portfolio5.png'

const StaticData = {
    homeData: [
        {
            firstName: "Suryansh",
            lastName: "Sahu",
            description: "Hi, I'm Suryansh Sahu, passionate about Full Stack Development, Data Science, and Machine Learning, always eager to learn, grow, and embrace new challenges.",
            buttonText: "Say Hello"
        }
    ],
    homeSocial: [
        {
            name: "linkedin",
            icon: (color)=><Linkedin color={color}/>,
            link: "https://www.linkedin.com/in/suryansh-sahu-b86213258"
        },
        {
            name: "envelope",
            icon: (color)=><Mail color={color}/>,
            link: "mailto:suryanshsahu289@gmail.com"
        },
        {
            name: "github",
            icon: (color)=><Github color={color}/>,
            link: "https://github.com/suryansh1619"
        }
    ],
    about: [
        {
            description: "I am Suryansh Sahu, a B.Tech student in Computer Science and Engineering at IIIT Nagpur. I am passionate about leveraging technology to build impactful solutions, with a strong focus on full-stack development and data science & machine learning. Through my academic journey and projects, I have gained hands-on experience in developing scalable web applications, designing user-centric interfaces, and applying ML techniques to solve real-world problems.",
            buttonText: "Download CV"
        }
    ],
    aboutInfo: [
        {
            title1: "Experience",
            subtitle1: "0 years Working",
            title2: "Completed",
            subtitle2: "10+ Projects",
        }
    ],
    footer: [
        {
            name: "instagram",
            icon: (color)=><Instagram color={color}/>,
            link: "https://www.instagram.com/suryansh__829?igsh=cjU4enVxaHM1eGpv"
        },
        {
            name: "twitter",
            icon: (color)=><Twitter color={color}/>,
            link: "https://x.com/Suryansh1619?t=26PJTqSl41n2kgZoO96sHg&s=08"
        },
        {
            name: "telegram",
            icon: (color)=><Telegram color={color}/>,
            link: "http://t.me/suryansh_1619"
        },
        {
            name: "linkedin",
            icon: (color)=><Linkedin color={color}/>,
            link: "https://www.linkedin.com/in/suryansh-sahu-b86213258"
        },
        {
            name: "github",
            icon: (color)=><Github color={color}/>,
            link: "https://github.com/suryansh1619"
        },
        {
            name: "codechef",
            icon: (color)=><Codechef color={color}/>,
            link: "https://www.codechef.com/users/ssurya_29"
        },
        {
            name: "leetcode",
            icon: (color)=><Leetcode color={color}/>,
            link: "https://leetcode.com/u/ssurya_29/"
        },
        {
            name: "codeforces",
            icon: (color)=><Codeforces color={color}/>,
            link: "https://codeforces.com/profile/Suryansh29"
        },
    ],
    projectsProject: [
        {
            images:[
                CodeWithUs1,
                CodeWithUs2,
                CodeWithUs3,
                CodeWithUs4,
                CodeWithUs5,
            ],
            title: "CodeWithUs",
            category: "Web",
            description: "Built a real-time collaborative coding platform using the MERN stack. Implemented authentication with JWT, WebSocket-based live collaboration, and integrated a code editor with syntax highlighting.",
            subtitle1: "JS",
            subtitle2: "React.js",
            subtitle3: "Tailwind CSS",
            subtitle4: "Node.js",
            subtitle5: "Express.js",
            subtitle6: "Socket.io",
            link: "https://github.com/suryansh1619/CodeWithUs"
        },
        {
            images:[
                MoneyMate1,
                MoneyMate2,
                MoneyMate3,
                MoneyMate4,
                MoneyMate5,
            ],
            title: "MoneyMate",
            category: "Web",
            description: "Developed a personal finance management web app with expense tracking, budget monitoring, and data visualization. Integrated secure authentication, CRUD operations, and dynamic chart representation for financial insights.",
            subtitle1: "React.js",
            subtitle2: "Tailwind CSS",
            subtitle3: "Node.js",
            subtitle4: "Express.js",
            subtitle5: "PostgreSQL",
            subtitle6: "JWT",
            link: "https://github.com/suryansh1619/MoneyMate"
        },
        {
            images:[
                SkinDisease1,
                SkinDisease2,
                SkinDisease3,
                SkinDisease4,
                SkinDisease5,
            ],
            title: "Multi-class Skin Disease Classification",
            category: "Deep Learning",
            description: "Implemented multiple deep CNN architectures (ConvNeXtV2, Vision Transformer, InceptionResNetV2) using PyTorch to classify skin diseases. Achieved high accuracy on HAM10000 dataset with transfer learning, fine-tuning, and evaluation metrics.",
            subtitle1: "Python",
            subtitle2: "Scikit-Learn",
            subtitle3: "TensorFlow",
            subtitle4: "Keras",
            subtitle5: "CNN",
            subtitle6: "OpenCV",
            link: "https://github.com/suryansh1619/Multi-Class-Skin-disease-Classification"
        },
        {
            images:[
                Emotion1,
                Emotion2,
                Emotion3,
                Emotion4,
                Emotion5,
            ],
            title: "Emotion Analysis",
            category: "Deep Learning",
            description: "Built an NLP-based emotion analysis model using Bidirectional LSTMs, achieving 99.9% accuracy on 50,000+ text samples.",
            subtitle1: "Python",
            subtitle2: "NLTK",
            subtitle3: "Scikit-Learn",
            subtitle4: "TensorFlow",
            subtitle5: "Keras",
            subtitle6: "WordCloud",
            link: "https://github.com/suryansh1619/Emotion-Analysis"
        },
        {
            images:[
                DogBreed1,
                DogBreed2,
                DogBreed3,
                DogBreed4,
                DogBreed5,
            ],
            title: "Dog Breed Classifier",
            category: "Deep Learning",
            description: "Developed a CNN-based image classification model in Python using TensorFlow and Keras to classify 120 dog breeds with 92% accuracy, leveraging the pre-trained EfficientNetV2S architecture",
            subtitle1: "Python",
            subtitle2: "Scikit-Learn",
            subtitle3: "TensorFlow",
            subtitle4: "Keras",
            subtitle5: "Matplotlib",
            subtitle6: "Pandas",
            link: "https://github.com/suryansh1619/Dog-Breed-Classifier"
        },
        {
            images:[
                Himalaya1,
                Himalaya2,
                Himalaya3,
                Himalaya4,
                Himalaya5,
            ],
            title: "Himalayan Trekker",
            category: "Web",
            description: "A tourism website exploring 12 districts of Himachal Pradesh, featuring AI-generated content, real-time weather updates, and interactive maps.",
            subtitle1: "HTML",
            subtitle2: "Javascript",
            subtitle3: "Python",
            subtitle4: "Django",
            subtitle5: "OpenAI",
            subtitle6: "SQLite2",
            link: "https://github.com/suryansh1619/Code_For_Good"
        },
        {
            images:[
                Color1,
                Color2,
                Color3,
                Color4,
                Color5,
            ],
            title: "Color Picker",
            category: "Web",
            description: "A dynamic color picker tool built with ReactJS, allowing users to select, copy, and generate color palettes effortlessly. Features real-time color preview and smooth UI interactions.",
            subtitle1: "HTML",
            subtitle2: "CSS",
            subtitle3: "JavaScript",
            subtitle4: "ReactJS",
            subtitle5: "Material UI",
            subtitle6: "",
            link: "https://github.com/suryansh1619/Color-Picker"
        },
        {
            images:[
                Portfolio1,
                Portfolio2,
                Portfolio3,
                Portfolio4,
                Portfolio5,
            ],
            title: "Portfolio",
            category: "Web",
            description: "A fully responsive and customizable portfolio website built with ReactJS, dynamically rendering content from a static data file. Features smooth UI, theme customization, and an optimized layout.",
            subtitle1: "HTML",
            subtitle2: "CSS",
            subtitle3: "JavaScript",
            subtitle4: "React",
            subtitle5: "Material UI",
            subtitle6: "",
            link: "https://github.com/suryansh1619/Portfolio-main"
        }
    ],
    qualificationEducation: [
        {
            title: "BTech",
            subtitle: "Indian Institute of Information Technology Nagpur",
            grade: "8.96 GPA",
            calender: "2022-present"
        },
        {
            title: "12th",
            subtitle: "Sri Sathya Sai Vidya Vihar GAIL Vijaipur",
            grade: "92%",
            calender: "2020 - 2021"
        },
        {
            title: "10th",
            subtitle: "Sri Sathya Sai Vidya Vihar GAIL Vijaipur",
            grade: "76.6%",
            calender: "2018-2019"
        },
    ],
    qualificationAchievement: [
        {
            title: "Leetcode",
            subtitle: "Rating : 1854",
            level: "Knight",
            calender: "Till 3/25"
        },
        {
            title: "Codechef",
            subtitle: "Rating : 1615",
            level: "3 Star",
            calender: "Till 7/24"
        },
        {
            title: "Codeforces",
            subtitle: "Rating : 1000",
            level: "Newbie",
            calender: "Till 7/24"
        },
    ],
    skills: [
        {
            category: "Frontend",
            subSkills: [
                { 
                    title: "HTML", 
                    icon: (color)=><HTML color={color}/> 
                },
                { 
                    title: "CSS", 
                    icon: (color)=><CSS color={color}/> 
                },
                { 
                    title: "Tailwind CSS", 
                    icon: (color)=><Tailwindcss color={color}/> 
                },
                { 
                    title: "JavaScript", 
                    icon: (color)=><JS color={color}/> 
                },
                { 
                    title: "React.js", 
                    icon: (color)=><Reactjs color={color}/> 
                },
                { 
                    title: "Material-UI", 
                    icon: (color)=><MaterialUI color={color}/> 
                },
            ],
        },
        {
            category: "Backend",
            subSkills: [
                { 
                    title: "Node.js", 
                    icon: (color)=><Nodejs color={color}/> 
                },
                { 
                    title: "Express.js", 
                    icon: (color)=><Express color={color}/> 
                },
                { 
                    title: "MongoDB", 
                    icon: (color)=><Mongodb color={color}/> 
                },
                { 
                    title: "PostgreSQL", 
                    icon: (color)=><Postgresql color={color}/> 
                },
                { 
                    title: "MySQL", 
                    icon: (color)=><Mysql color={color}/> 
                },
                { 
                    title: "PHP", 
                    icon: (color)=><Php color={color}/> 
                },
            ],
        },
        {
            category: "Data Science / ML",
            subSkills: [
                { 
                    title: "Python", 
                    icon: (color)=><Python color={color}/> 
                },
                { 
                    title: "NumPy", 
                    icon: (color)=><Numpy color={color}/> 
                },
                { 
                    title: "Pandas", 
                    icon: (color)=><Pandas color={color}/> 
                },
                { 
                    title: "Matplotlib", 
                    icon: (color)=><Matplotlib color={color}/> 
                },
                { 
                    title: "Seaborn", 
                    icon: (color)=><Seaborn color={color}/> 
                },
                { 
                    title: "Scikit-Learn", 
                    icon: (color)=><Scikitlearn color={color}/> 
                },
                { 
                    title: "TensorFlow", 
                    icon: (color)=><Tensorflow color={color}/> 
                },
                { 
                    title: "PyTorch", 
                    icon: (color)=><Pytorch color={color}/> 
                },
                { 
                    title: "Keras", 
                    icon: (color)=><Keras color={color}/> 
                },
                { 
                    title: "R", 
                    icon: (color)=><R color={color}/> 
                },
            ],
        },
        {
            category: "Programming",
            subSkills: [
                { 
                    title: "C", 
                    icon: (color)=><C color={color}/> 
                },
                { 
                    title: "C++", 
                    icon: (color)=><Cpp color={color}/>
                },
                { 
                    title: "Python", 
                    icon: (color)=><Python color={color}/> 
                },
            ],
        },
        {
            category: "DevOps / Tools",
            subSkills: [
                { 
                    title: "Git", 
                    icon: (color)=><Git color={color}/> 
                },
                { 
                    title: "GitHub", 
                    icon: (color)=><Github color={color}/> 
                },
                { 
                    title: "Streamlit", 
                    icon: (color)=><Streamlit color={color}/> 
                },
                { 
                    title: "Postman", 
                    icon: (color)=><Postman color={color}/> 
                },
                { 
                    title: "Docker", 
                    icon: (color)=><Docker color={color}/> 
                },
                { 
                    title: "VS Code", 
                    icon: (color)=><VSCode color={color}/> 
                },
            ],
        },
    ]
};

export default StaticData;