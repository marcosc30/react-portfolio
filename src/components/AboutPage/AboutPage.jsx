import React from 'react';
import {getImageUrl} from '../../utils';
import styles from './AboutPage.module.css';

export const AboutPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <img src={getImageUrl('ap/profile-picture.jpg')} alt="Profile Picture" />
        <h1>About Me</h1>
        <p className={styles.paragraph}>Welcome to the about page! I'm Marcos, a student at Brown studying Mathematics and Computer Science (two separate degrees for now, although Brown offers a joint as well). I've been into math, especially more research and proof-based mathematics, for a while now, which is how I got started coding. It's hard to go far in math without being able to test stuff through code. I ended up liking coding a lot, thanks to an accelerated introduction to programming I took at Brown. Since then, I've explored it a lot more through projects and other classes and found that it's something I enjoy doing!</p>

        <p className={styles.paragraph}> My main interests and skills are in Deep Learning, Cryptography, Systems, and Back-End/Database work. I mostly code quick projects in Python since I've been doing it the longest, but I'm a big fan of switching it up and learning different PLs. So far, I'd consider myself proficient in Python, C, Rust, C++, C#, Go, and Racket. Most of these I've used in classes I took, apart from Rust, C#, both of which I'm currently working on projects for. In terms of frameworks, I'm quite experienced with TensorFlow and PyTorch for DL, SQLite for database work, and Flask for web development. I've also used React and Javascript a little (like for this website) but I still want to get a lot more experienced with Front-End work before I call myself proficient. I also have some wide experience with developer tools like Docker and Git, and I have an Azure Fundamentals certification and have experience working with the cloud both for research and application development. </p>

        <p className={styles.paragraph}>On the personal side, I was born in Madrid but I spent most of my time growing up in Seattle and Cádiz until I moved back to Madrid for high school. I love making films and in highschool, I worked as a freelance screenwriter. Nowadays, I spend a lot of my free time playing football or surfing when I'm back in Cádiz. I work at a public highschool in central Providence as a math team coach, which is a job that I've had a blast doing since freshman year of college. I've always been very invested in education, especially math education, but have recently also been into CS education and volunteering in programs to improve access to the field. </p>
        <div>
          <h2>Contact Information</h2>
          <p className={ styles.contact }>School Email: marcos_carmona@brown.edu</p>
          <p className={ styles.contact }>Current Research Email: marcos.carmona@foundation29.org</p>
          <p className={ styles.contact }>Personal Email: mcarmona0430@gmail.com</p>
          <a href="https://github.com/marcosc30">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="100" height="100" />   
          </a>
          <a href="https://www.linkedin.com/in/marcos-carmona-3a1b3b1b2/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="90" height="90" />
          </a>

          <a href="https://drive.google.com/file/d/1Lqg_4I_Dmp8FoRTTT7Kxef8t4zAGcYdu/view?usp=sharing">
            <p>Resume</p>
          </a>
          
        </div>
      </div>
    );
  }

  // Add a resume at the bottom and a link to my academia publications once the papers are published
  
