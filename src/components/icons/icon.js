import React from 'react';

import {
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  GitHubIcon,
  CodepenIcon,
  LogoIcon,
  ExternalIcon,
  StarIcon,
  ForkIcon,
  FolderIcon,
} from '../../components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'Codepen':
      return <CodepenIcon />;
    case 'GitHub':
      return <GitHubIcon />;
    case 'Instagram':
      return <InstagramIcon />;
    case 'Linkedin':
      return <LinkedinIcon />;
    case 'Twitter':
      return <TwitterIcon />;
    case 'Logo':
      return <LogoIcon />;
    case 'Star':
      return <StarIcon />;
    case 'Fork':
      return <ForkIcon />;
    case 'Folder':
      return <FolderIcon />;
    default:
      return <ExternalIcon />;
  }
};

export default Icon;
