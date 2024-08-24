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
        <p className={styles.explanation}>This was my final project for Cryptography (Math 1580), which was a more math-focused class; however, this project contains an extensive implementation that honestly took a lot longer than the research itself, so I recommend taking a look at it. It covers the quadratic sieve algorithm, which is an integer factorization algorithm. It fits a specific niche of being the fastest factorization algorithm for numbers too large for Pollard-Rho to be the fastest, but too small for the number field sieves to be the fastest.</p>
        <div>
          <a href="https://github.com/marcosc30/QuadraticSieve">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />   
          </a>
        </div>
      </div>
    );
  }

  // Add a resume at the bottom and a link to my academia publications once the papers are published
  
