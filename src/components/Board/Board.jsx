import React from 'react';
import PageTitle from './PageTitle/PageTitle';
import EventBoard from './EventBoard/EventBoard';
import incomingevents from './events.json';

export default function Board() {
  return (
    <>
      <PageTitle text="Event board TTTTT" />
      <EventBoard events={incomingevents} />
    </>
  );
}
