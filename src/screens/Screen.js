import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { screenStyles as styles } from '../theme/styles';
import Button from '../components/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const App = ({ result, inputting, prevValue }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultWrapper}>
        <Text style={styles.resultText}>
          {inputting || prevValue || result.toString()}
        </Text>
      </View>
      <View style={styles.padWrapper}>
        <View style={styles.numberContainer}>
          <View style={styles.row}>
            <Button value={'C'} operator />
            <Button value={0} />
            <Button value={'.'} />
          </View>
          <View style={styles.row}>
            <Button value={1} />
            <Button value={2} />
            <Button value={3} />
          </View>
          <View style={styles.row}>
            <Button value={4} />
            <Button value={5} />
            <Button value={6} />
          </View>
          <View style={styles.row}>
            <Button value={7} />
            <Button value={8} />
            <Button value={9} />
          </View>
        </View>
        <View style={styles.operatorContainer}>
          <Button operator value={'/'} />
          <Button operator value={'*'} />
          <Button operator value={'+'} />
          <Button operator value={'-'} />
          <Button operator value={'='} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const mapStateToProps = state => ({
  calculation: state.calculator.calculation,
  result: state.calculator.result,
  inputting: state.calculator.inputting,
  prevValue: state.calculator.prevValue,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
