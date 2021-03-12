import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.column}>
        <div className={classes.title}>Snowball Finance</div>
        {/* no docs yet
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-book ${classes.linkIcon}`}></i>
          <span>docs</span>
        </a>
      */}
        <a
          href="https://medium.com/snowball-finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-medium ${classes.linkIcon}`}></i>
          <span>{t('News')}</span>
        </a>

        <a
          href="https://github.com/Snowball-Finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-github ${classes.linkIcon}`}></i>
          <span>{t('GitHub')}</span>
        </a>
      </div>


      <div className={classes.column}>
        <div className={classes.title}>{t('Coming Soon')}</div>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-landmark ${classes.linkIcon}`}></i>
          <span>Governance</span> 
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-chart-bar ${classes.linkIcon}`}></i>
          <span>Analytics</span>
        </a>
      </div>
      
      <div className={classes.column}>
        <div className={classes.title}>{t('Socials')}</div>
        <a
          href="https://twitter.com/throwsnowballs"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-twitter ${classes.linkIcon}`}></i>

          <span>Twitter</span>
        </a>
        <a
          href="https://t.me/throwsnowballs"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-telegram ${classes.linkIcon}`}></i>

          <span>Telegram</span>
        </a>
        <a
          href="https://discord.gg/T35jZ2hhPZ"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-discord ${classes.linkIcon}`}></i>
          <span>Discord</span>
        </a>
      </div>

    </div>
  );
};

export default memo(Footer);
