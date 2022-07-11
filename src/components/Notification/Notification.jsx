import React from 'react';
import PropTypes from 'prop-types';

import { Message } from './styledNotification';

const Notification = ({ message }) => {
  return (
    <div>
      <Message>{message}</Message>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;