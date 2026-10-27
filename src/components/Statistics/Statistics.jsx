import React from 'react';

export default function Statistics({ data }) {
  const { id, label, percentage } = data;
  return (
    <div>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {data.map(({ id, label, percentage }) => (
            <li className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
