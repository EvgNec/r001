import React from 'react';
import PageTitle from './PageTitle';
import EventBoard from './EventBoard';
import incomingevents from './events.json';

export default function Board() {
  return (
    <div>
      <PageTitle text="Event board TTTTT" />
      <EventBoard events={incomingevents} />
    </div>
  );
}
