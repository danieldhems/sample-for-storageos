import React from 'react';
import { connect } from 'react-redux';
import TimedDestruct from 'app/common/components/timed-destruct';
import NotificationItem from './notification-item';

const NewNotifications = ({ sidebarOpen, newItems }) => (
  <div className="new-notifications">
    {!sidebarOpen &&
      newItems.map(item => {
        if (!item.isRead) {
          return (
            <TimedDestruct duration={10000}>
              <NotificationItem {...{ item }} isNew />
            </TimedDestruct>
          );
        }
      })}
  </div>
);

const mapStateToProps = ({ ui, interactions }) => {
  return {
    sidebarOpen: ui.sidebarOpen,
    newItems: interactions.filter(
      item => item.meta.event !== 'message' && item.isNew
    )
  };
};

export default connect(mapStateToProps, () => ({}))(NewNotifications);
