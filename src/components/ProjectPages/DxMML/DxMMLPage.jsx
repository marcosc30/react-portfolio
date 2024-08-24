import React from 'react';
import {getImageUrl} from '../../../utils';
import styles from './DxMMLPage.module.css';

export const DxMMLPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className={styles.project_pic}>
        <img src={getImageUrl('hp/f29.png')} alt="DxMML Image" />
        </div>
        <h1>DxMML</h1>
        <p className={styles.explanation}>This is a project I've been working on during my time as a research intern at Foundation29. It's a multimodal rare disease diagnosis neural network looking to improve on the current GestaltMML model. It is one of two papers that I'm looking to publish by the end of my internship in September!</p>
        <div>
          <a href="https://github.com/marcosc30/DxMML">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />   
          </a>
        </div>
      </div>
    );
  }

  // Add a resume at the bottom and a link to my academia publications once the papers are published
  
