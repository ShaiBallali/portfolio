import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';

const logoSize = '50px';
const linkedinButtonColor = '#0077b5';
const githubButtonColor = '#a4aeb2';
const phoneColor = '#fff';
const emailColor = '#fff';
const linkedinAddress = 'https://www.linkedin.com/in/shai-ballali-28b7a217a/';
const githubAddress = 'https://github.com/ShaiBallali';
const email = 'mailto: shai135790@gmail.com';
const phoneNumber = '+9722342749';

function Contact() {
  return (
    <div className="header">
      <h1 className="contact-header">Contact</h1>
      <container className="logo-container">
        <a
          href={linkedinAddress}
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <BsLinkedin size={logoSize} color={linkedinButtonColor} />
        </a>
        <a
          href={githubAddress}
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <BsGithub size={logoSize} color={githubButtonColor} />
        </a>
        <a href={email} target="_blank" rel="noreferrer" className="icon">
          <MdEmail size={logoSize} color={emailColor} />
        </a>
      </container>
    </div>
  );
}

export default Contact;
