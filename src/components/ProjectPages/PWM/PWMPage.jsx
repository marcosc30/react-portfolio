import React from 'react';
import {getImageUrl} from '../../../utils';
import styles from './PWMPage.module.css';

export const PWMPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className={styles.project_pic}>
        <img src={getImageUrl('hp/pw_manager.png')} alt="PWM Image" />
        </div>
        <h1>Password Manager</h1>
        <p className={styles.explanation}>This was a recent application I made using Rust. I'm a big fan of cryptography and this let me play around with some fun concepts like encryption, password generation, hashing, checking for compromised or unsafe passwords, and working with GUIs. I'm also planning to expand it by using a Cloud storage SQL service to store data to allow for synchronizing account data.</p>
        <div>
          <a href="https://github.com/marcosc30/password_manager">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />   
          </a>
        </div>
      </div>
    );
  }

  // Add a resume at the bottom and a link to my academia publications once the papers are published
  
