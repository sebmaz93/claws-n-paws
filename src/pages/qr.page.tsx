import React from 'react';
import {ReactComponent as QR} from 'assets/clawsnpaws_website.svg';

const QRPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
        width: '100%',
      }}
    >
      <QR style={{height: 300, width: 300}} />
    </div>
  );
};

export default QRPage;
