import React, { useEffect } from 'react';

import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

export default function GameEndModel({ log, score, open }) {
  useEffect(() => {}, [log]);

  return (
    <Modal open={open}>
      <Typography>
        You scored {score}!
      </Typography>
    </Modal>
  );
}