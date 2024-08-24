import React from 'react';
import {getImageUrl} from '../../utils';
import styles from './HomePage.module.css';

export const HomePage = () => {
    return (
      <div className="home-page">
        <div className={styles.biography_container}>
          <h1 className={styles.title_bio}>About Me</h1>
          <div className={styles.profile_pic}>
            <img src={getImageUrl('hp/hppic.jpg')} alt="Image" />
          </div>
          <div>
            <p className={styles.short_bio}> Hi there! My name is Marcos, I'm a third-year Mathematics-Computer Science student at Brown University from Spain. I made this website to host all of my projects in an organized way, which includes both CS-oriented projects and a few pure math research projects (although, for the most part, all of my projects involve a tasteful handful of both). This homepage contains three projects, but for the full list, head to the projects tab!</p>
          </div>
        </div>
        <h1 className={styles.title_proj}>Projects</h1>
          <div className={styles.project1}>
            <div className={styles.project1_pic}>
              <img src={getImageUrl('hp/pw_manager.png')} alt="Image" />
            </div>
            <h2>Password Manager</h2>
            <p>This was a recent application I made using Rust. I'm a big fan of cryptography and this let me play around with some fun concepts like encryption, password generation, hashing, checking for compromised or unsafe passwords, and working with GUIs. I'm also planning to expand it by using a Cloud storage SQL service to store data to allow for synchronizing account data.</p>
            <a href='projects/pwmanager'> Link to full project page</a>
          </div>
          <div className={styles.project2}>
          <div className={styles.project2_pic}>
                <img src={getImageUrl('pp/era5.png')} alt="Image" />
            </div>
            <h2>ENSO-Watch</h2>
            <p>This was my final project for Deep Learning that I did alongside 3 other people. My role was model architecture and implementation, although we all were pretty involved with everything. We designed, implemented, and trained several models using the WeatherBench2 dataset to predict macro-level atmospheric weather trends, achieving pretty good results!</p>
            <a href='projects/enso'>Link to full project page</a>
          </div>
          <div className={styles.project3}>
          <div className={styles.project3_pic}>
              <img src={getImageUrl('hp/f29.png')} alt="Image" />
            </div>
            <h2>DxMML</h2>
            <p>This is a project I've been working on during my time as a research intern at Foundation29. It's a multimodal rare disease diagnosis neural network looking to improve on the current GestaltMML model. It is one of two papers that I'm looking to publish by the end of my internship in September!</p>
            <a href='projects/dxmml'>Link to full project page</a>
          </div>
          <div className={styles.further_projects}>
            <h2>Full Project List with Links to Projects is Available on <a href='Projects'> Projects Tab</a></h2>
          </div>
        </div>

    );
  }
  

  // Include resume at the bottom with contact info