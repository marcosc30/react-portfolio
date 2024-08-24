import React from 'react';
import {getImageUrl} from '../../utils';

export const AboutPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <img src={getImageUrl('ap/profile-picture.jpg')} alt="Profile Picture" />
        <h1>About Me</h1>
        <p>This will be a slightly longer paragraph about interests, on the home page will be a shorter explanation of who I am</p>
        <div>
          <h2>Contact Information</h2>
          <p>School Email: marcos_carmona@brown.edu</p>
          <p>Current Research Email: marcos.carmona@foundation29.org</p>
          <p>Personal Email: mcarmona0430@gmail.com</p>
          <a href="https://github.com/marcosc30">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="30" height="30" />   
          </a>
          <a href="https://www.linkedin.com/in/marcos-carmona-3a1b3b1b2/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="25" height="25" />
          </a>

          <a href="https://drive.google.com/file/d/1N0t_D45zQmzR2qrcOWFlmFJNH0uZCNzL/view?usp=sharing">
            <p>Resume</p>
          </a>
          
        </div>
      </div>
    );
  }

  // Add a resume at the bottom and a link to my academia publications once the papers are published
  
