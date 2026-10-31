import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryLine from './TransactionHistoryLine/TransactionHistoryLine';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  const [visibleCount, setVisibleCount] = useState(10);

  const visibleItems = items.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  const showLess = () => {
    setVisibleCount(10);
  };

  return (
    <div className={css.container}>
      <table className={css.transactionHistory}>
        <thead className={css.header}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {visibleItems.map(item => (
            <TransactionHistoryLine key={item.id} item={item} />
          ))}
        </tbody>
      </table>

      <div className={css.controls}>
        {visibleCount < items.length && (
          <button type="button" className={css.button} onClick={showMore}>
            Показати ще 10
          </button>
        )}

        {visibleCount > 10 && (
          <button
            type="button"
            className={css.buttonSecondary}
            onClick={showLess}
          >
            Згорнути до 10
          </button>
        )}
      </div>

      <p className={css.counter}>
        Показано {visibleItems.length} із {items.length}
      </p>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
