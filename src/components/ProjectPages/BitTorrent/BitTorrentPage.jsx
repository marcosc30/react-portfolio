import React from 'react';
import {getImageUrl} from '../../../utils';
import styles from './BitTorrentPage.module.css';

export const BitTorrentPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className={styles.project_pic}>
        <img src={getImageUrl('hp/BTscs.png')} alt="BitTorrent Image" />
        </div>
        <h1>BitTorrent Implementation</h1>
        <p className={styles.explanation}>This was my final project for my Networks class. We decided to implement the BitTorrent protocol, which is used to share files over the internet via peer-to-peer connections instead of the typical server-to-client model. Unlike the TCP and IP projects, we built a dedicated frontend for it as well, so this project involved both Javascript and Go, the latter of which was used to build the backend and the tracking server which kept track of peer addresses to connect peers. 

        The project can be split up into the seeder, leecher, and server logic. There are more details in the writeup provided within the repository. Essentially, the seeder is the peer providing the file (we implement a slightly simplified version of the protocol which only connects a leecher to a single seeder) and the leecher is the one downloading, and thus we had to implement the handhsake protocol, as well as the file transfer. This involved both the creation of the torrent metadata files themselves, as well as parsing them and using metadata to organize the file into chunks, which are sent and verified using hashes of the chunks. Meanwhile, the server, which I ran on Azure, keeps track of who has what file and can thus serve as seeder when a request for a file is made to the server. To avoid port forwardin, we created both a local test implementation and a working implementation in a different branch that uses IPv6.
        </p>
        <div>
          <a href="https://github.com/klivanskyr/csci1680-bittorent">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />   
          </a>
        </div>
      </div>
    );
  }

  
