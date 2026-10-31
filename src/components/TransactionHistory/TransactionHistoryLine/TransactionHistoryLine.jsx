import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistoryLine.module.css';

export default function TransactionHistoryLine({ item }) {
  const { type, amount, currency } = item;

  return (
    <tr className={css.row}>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
}

TransactionHistoryLine.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
