import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  clearCalculation,
  inputOperator,
  inputValue,
  updateCalculation,
} from '../redux/actions';
import { buttonStyles as styles } from '../theme/styles';

const Button = ({
  operator,
  updateCalculation,
  inputValue,
  inputOperator,
  clearCalculation,
  value,
}) => {
  let onPress;
  if (operator) {
    switch (value.toLowerCase()) {
      case '=':
        onPress = () => updateCalculation(value);
        break;
      case 'c':
        onPress = () => clearCalculation(value);
        break;
      default:
        onPress = () => inputOperator(value);
    }
  } else {
    onPress = () => inputValue(value);
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={operator ? styles.btnOperator : styles.btnContainer}>
      <Text style={styles.btnText}>{value}</Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateCalculation,
      inputValue,
      inputOperator,
      clearCalculation,
    },
    dispatch,
  );
};

const mapStateToProps = state => ({});

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Button),
);
