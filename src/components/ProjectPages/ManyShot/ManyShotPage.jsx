import React from 'react';
import {getImageUrl} from '../../../utils';
import styles from './ManyShotPage.module.css';

export const ManyShotPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className={styles.project_pic}>
        <img src={getImageUrl('pp/f29logo.png')} alt="ManyShot Image" />
        </div>
        <h1>Many-Shot Learning Improvement for LLM-based Rare Disease Diagnosis</h1>
        <p className={styles.explanation}>This is the second paper I've led during my time at Foundation 29. DxGPT is a current project of company, leveraging LLMs to make rare disease diagnoses. The aim of this paper was to analyze the performance gains off integrating many-shot learning into prompts, as well as how LLM accuracy in diagnosis is affected by which ERN category the rare disease belongs to (based on symptoms). This paper focused heavily on data collection, producing over 200 CSV files filled with diagnoses.</p>
        <div>
          <a href="https://github.com/marcosc30/ManyShotDxGPT">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />   
          </a>
        </div>
      </div>
    );
  }

  // Add a resume at the bottom and a link to my academia publications once the papers are published
  
