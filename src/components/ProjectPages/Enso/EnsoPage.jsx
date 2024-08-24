import React from 'react';
import {getImageUrl} from '../../../utils';
import styles from './EnsoPage.module.css';

export const EnsoPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className={styles.project_pic}>
        <img src={getImageUrl('pp/era5.png')} alt="ENSO-Watch Image" />
        </div>
        <h1>ENSO-Watch</h1>
        <p className={styles.explanation}>This was my final project for Deep Learning that I did alongside 3 other people. My role was model architecture and implementation, although we all were pretty involved with everything. We designed, implemented, and trained several models using the WeatherBench2 dataset to predict macro-level atmospheric weather trends, achieving pretty good results!</p>
        <div>
          <a href="https://github.com/marcosc30/ENSO-Watch">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />   
          </a>
        </div>
      </div>
    );
  }

  // Add a resume at the bottom and a link to my academia publications once the papers are published
  
