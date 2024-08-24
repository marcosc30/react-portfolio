import React from 'react';
import {getImageUrl} from '../../../utils';
import styles from './BlockscapesPage.module.css';

export const BlockscapesPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className={styles.project_pic}>
        <img src={getImageUrl('pp/blockscapes.jpg')} alt="Blockscapes Image" />
        </div>
        <h1>Blockscapes RL Model</h1>
        <p className={styles.explanation}>Admittedly, this is one of my sillier projects. There is a mobile Tetris-like block game called Blockscapes that I played quite extensively at one point. However, the high scores seemed outlandlishly high to me. That inspired me to make my own attempt at making a model to play the game and achieve high scores. The full model is designed and coded, but I still need to make tweaks and train it on a better system to get good results, as right now, the results are somewhat lackluster.</p>
        <div>
          <a href="https://github.com/marcosc30/Blockscaped-RL-model">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />   
          </a>
        </div>
      </div>
    );
  }

  // Add a resume at the bottom and a link to my academia publications once the papers are published
  
