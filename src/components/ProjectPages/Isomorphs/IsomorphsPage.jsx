import React from 'react';
import {getImageUrl} from '../../../utils';
import styles from './IsomorphsPage.module.css';

export const IsomorphsPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className={styles.project_pic}>
        <img src={getImageUrl('hp/gt_pic.png')} alt="GT Image" />
        </div>
        <h1>Isomorphism Classes of S-Decorated Graphs</h1>
        <p className={styles.explanation}>This was a research project I did while taking Graph Theory (Math 1230). I don't usually publish these projects, but I loved the topic and ended up discovering a nifty algorithm that, to my knowledge, hadn't been published before on the topic. The implementation in Python is also included!</p>
        <div>
          <a href="https://github.com/marcosc30/IsomorphismClassesofSDecoratedGraph">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />   
          </a>
        </div>
      </div>
    );
  }

  // Add a resume at the bottom and a link to my academia publications once the papers are published
  
