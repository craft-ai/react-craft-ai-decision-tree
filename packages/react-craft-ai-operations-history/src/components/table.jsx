import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

export const CELL_WIDTH = 120;
export const TIMESTAMP_CELL_WIDTH = 280;
export const INIT_AGENT_NAME_CELL_WIDTH = 140;

export function computeCellWidth(width) {
  const computedWidth = width * 15;
  return computedWidth > CELL_WIDTH ? computedWidth : CELL_WIDTH;
}

const Table = styled('table')`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  max-width: ${({ maxWidth }) => (maxWidth == null ? 'auto' : `${maxWidth}px`)};

  border-spacing: 0px;
  border-collapse: collapse;

  thead {
    display: block;
    max-width: ${({ maxWidth }) => (maxWidth == null ? 'auto' : `${maxWidth}px`)};

    overflow-x: hidden;
  }
  tbody {
    display: block;
    height: ${({ height, rowHeight }) => `${height - rowHeight}px`};
    max-width: ${({ maxWidth }) => (maxWidth == null ? 'auto' : `${maxWidth}px`)};

    overflow-x: scroll;
    overflow-y: scroll;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    height: ${({ rowHeight }) => rowHeight}px;
  }

  th,
  td {
    flex: 0 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: ${CELL_WIDTH}px;

    &:first-child {
      width: ${TIMESTAMP_CELL_WIDTH}px;
    }

    padding: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    small {
      font-size: 0.7em;
    }
  }

  th:last-child {
    min-width: 10px;
    padding: 0px;
  }
`;

Table.propTypes = {
  height: PropTypes.number.isRequired,
  maxWidth: PropTypes.number.isRequired,
  rowHeight: PropTypes.number.isRequired
};

export default Table;
