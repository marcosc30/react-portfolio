import React from 'react';
import {getImageUrl} from '../../../utils';
import styles from './IPnTCPPage.module.css';

export const IPnTCPPage = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className={styles.project_pic}>
        <img src={getImageUrl('hp/TCPimg.png')} alt="IPnTCP Image" />
        </div>
        <h1>IP and TCP Implementation from Scratch</h1>
        <p className={styles.explanation}>This was the main project in my Networks class, which took about two months to build. It primarily involved first building the Network layer within local UDP connections. We do this by first simulating a network, with different hosts and routers, then building all of the necessary features to make a networking API that a client can use to send packets within this simulated network. This involves features like building packets, packet forwarding, RIP, etc.

        The second part of the project was building the Transport layer, specifically TCP to be able to reliably send data from one host to another, with the goal of making another API that the client can use to send data via connections. This was considerably trickier than IP, and involved a lot of code. The main features were creating and storing sockets (which are what primarily interact with the IP layer), handling and tracking different connections, managing the state of each connection (like the handshake, data transfer, and closing), and handling the sending logic itself (the main sending and ACK logic itself as well as things like zero window probing). 
        </p>
        <div>
          <a href="https://github.com/marcosc30/tcp-trippy-code-performance">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />   
          </a>
        </div>
      </div>
    );
  }

  
