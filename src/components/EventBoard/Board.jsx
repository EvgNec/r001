import React from 'react';
import PageTitle from './PageTitle';
import EventBoard from './EventBoard';
import incomingevents from './events.json';

export default function Board() {
  return (
    <>
      <PageTitle text="Event board TTTTT" />
      <EventBoard events={incomingevents} />
    </>
  );
}
