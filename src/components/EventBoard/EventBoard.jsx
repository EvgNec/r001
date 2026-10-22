import React from 'react';
import css from './EventBoard.module.css';

function EventBoard({ events }) {
  console.log(events);
  return <div className={css.eventBoard}>Event card</div>;
}

export default EventBoard;
