import React from 'react';
import {getImageUrl} from '../../utils';
import styles from './ProjectsPage.module.css';
import { Link } from 'react-router-dom';

export const ProjectsPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>My Projects</h1>
        <div className={styles.project1}>
            <div className={styles.project1_pic}>
              <img src={getImageUrl('hp/pw_manager.png')} alt="Image" />
            </div>
            <h2>Password Manager</h2>
            <p>This was a recent application I made using Rust. I'm a big fan of cryptography and this let me play around with some fun concepts like encryption, password generation, hashing, checking for compromised or unsafe passwords, and working with GUIs. I'm also planning to expand it by using a Cloud storage SQL service to store data to allow for synchronizing account data.</p>
            <Link to='/projects/pwmanager'> Link to full project page</Link>
        </div>
        <div className={styles.project2}>
          <div className={styles.project2_pic}>
                <img src={getImageUrl('hp/gt_pic.png')} alt="Image" />
            </div>
            <h2>Isomorphism Classes of S-Decorated Graphs</h2>
            <p>This was a research project I did while taking Graph Theory (Math 1230). I don't usually publish these projects, but I loved the topic and ended up discovering a nifty algorithm that, to my knowledge, hadn't been published before on the topic. The implementation in Python is also included!</p>
            <Link to='/projects/isomorphisms'>Link to full project page</Link>
        </div>
        <div className={styles.project1}>
            <div className={styles.project1_pic}>
              <img src={getImageUrl('hp/f29.png')} alt="Image" />
            </div>
            <h2>DxMML</h2>
            <p>This is a project I've been working on during my time as a research intern at Foundation29. It's a multimodal rare disease diagnosis neural network looking to improve on the current GestaltMML model. It is one of two papers that I'm looking to publish by the end of my internship in September!</p>
            <Link to='/projects/dxmml'> Link to full project page</Link>
        </div>
        <div className={styles.project2}>
          <div className={styles.project2_pic}>
                <img src={getImageUrl('pp/era5.png')} alt="Image" />
            </div>
            <h2>ENSO-Watch</h2>
            <p>This was my final project for Deep Learning that I did alongside 3 other people. My role was model architecture and implementation, although we all were pretty involved with everything. We designed, implemented, and trained several models using the WeatherBench2 dataset to predict macro-level atmospheric weather trends, achieving pretty good results!</p>
            <Link to='/projects/enso'>Link to full project page</Link>
        </div>
        <div className={styles.project1}>
            <div className={styles.project1_pic}>
              <img src={getImageUrl('pp/f29logo.png')} alt="Image" />
            </div>
            <h2>Many-Shot Learning Improvement for LLM-based Rare Disease Diagnosis</h2>
            <p>This is the second paper I've led during my time at Foundation 29. DxGPT is a current project of company, leveraging LLMs to make rare disease diagnoses. The aim of this paper was to analyze the performance gains off integrating many-shot learning into prompts, as well as how LLM accuracy in diagnosis is affected by which ERN category the rare disease belongs to (based on symptoms). This paper focused heavily on data collection, producing over 200 CSV files filled with diagnoses.</p>
            <Link to='/projects/manyshot'> Link to full project page</Link>
        </div>
        <div className={styles.project2}>
          <div className={styles.project2_pic}>
                <img src={getImageUrl('pp/blockscapes.jpg')} alt="Image" />
            </div>
            <h2>Blockscapes RL Model</h2>
            <p>Admittedly, this is one of my sillier projects. There is a mobile Tetris-like block game called Blockscapes that I played quite extensively at one point. However, the high scores seemed outlandlishly high to me. That inspired me to make my own attempt at making a model to play the game and achieve high scores.</p>
            <Link to='/projects/blockscapes'>Link to full project page</Link>
        </div>
        <div className={styles.project1}>
            <div className={styles.project1_pic}>
              <img src={getImageUrl('pp/quadsieve.jpg')} alt="Image" />
            </div>
            <h2>Quadratic Sieve Implementation</h2>
            <p>This was my final project for Cryptography (Math 1580), which was a more math-focused class; however, this project contains an extensive implementation that honestly took a lot longer than the research itself, so I recommend taking a look at it. It covers the quadratic sieve algorithm, which is an integer factorization algorithm. It fits a specific niche of being the fastest factorization algorithm for numbers too large for Pollard-Rho to be the fastest, but too small for the number field sieves to be the fastest.</p>
            <Link to='/projects/quadsieve'> Link to full project page</Link>
        </div>
      </div>
    );
  }
  
