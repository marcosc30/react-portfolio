import React from 'react';
import {getImageUrl} from '../../../utils';
import styles from './QuadSievePage.module.css';

export const QuadSievePage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className={styles.project_pic}>
        <img src={getImageUrl('pp/quadsieve.jpg')} alt="Quadratic Sieve Image" />
        </div>
        <h1>Quadratic Sieve</h1>
        <p className={styles.explanation}>The quadratic sieve is an integer factorization algorithm commonly used for medium sized numbers less than 10<sup>100</sup> but greater than 10<sup>20</sup> or so. The algorithm is simpler than the Number Field Sieve, and the paper itself goes into conceptual detail explaining both how it works and other observations like the most commonly accepted runtime heuristic and situations when it is best used. </p>
        <div>
          <a href="https://github.com/marcosc30/Quadratic-Sieve-Paper">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />   
          </a>
        </div>
      </div>
    );
  }

  // Add a resume at the bottom and a link to my academia publications once the papers are published
  
