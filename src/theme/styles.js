import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#dddddd',
    paddingVertical: 16,
    paddingHorizontal: 16,
    margin: 8,
    borderRadius: 5,
    flexBasis: 50,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOperator: {
    backgroundColor: '#dddddd',
    paddingVertical: 0,
    paddingHorizontal: 16,
    margin: 8,
    borderRadius: 5,
    flexBasis: 50,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#010101',
    fontSize: 28,
  },
});

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  resultWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  resultText: {
    fontSize: 56,
  },
  padWrapper: {
    marginHorizontal: 8,
    flexDirection: 'row',
    marginBottom: 8,
    // flex: 1,
  },
  numberContainer: {
    flex: 3 / 4,
    flexDirection: 'column-reverse',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  operatorContainer: {
    flex: 1 / 4,
    flexDirection: 'column',
  },
});
