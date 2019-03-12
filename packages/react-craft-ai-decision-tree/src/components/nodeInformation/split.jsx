import _ from 'lodash';
import { interpreter } from 'craft-ai';
import PropTypes from 'prop-types';
import React from 'react';

class Split extends React.Component {
  displaySplit = (child, key) => {
    try {
      const propertyType = this.props.context[child.decision_rule.property]
        .type;
      const text = interpreter.formatDecisionRules([
        {
          operand: child.decision_rule.operand,
          operator: child.decision_rule.operator,
          type: propertyType
        }
      ]);
      return (
        <tr key={ key }>
          <td style={{ borderTop: key !== 0 ? 'solid 1px black' : 'none' }}>
            {child.decision_rule.property}
          </td>
          <td style={{ borderTop: key !== 0 ? 'solid 1px black' : 'none' }}>
            {text}
          </td>
        </tr>
      );
    }
    catch (err) {
      return (
        <tr style={{ color: 'red' }} key={ key }>
          <td>{err.message}</td>
        </tr>
      );
    }
  };

  render() {
    return (
      <div className='node-split'>
        <h3 style={{ textAlign: 'center' }}>Splits</h3>
        {!this.props.node.children ? (
          <p>N/A (leaf node)</p>
        ) : (
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>{_.map(this.props.node.children, this.displaySplit)}</tbody>
          </table>
        )}
      </div>
    );
  }
}

Split.propTypes = {
  node: PropTypes.object.isRequired,
  context: PropTypes.object.isRequired
};

export default Split;