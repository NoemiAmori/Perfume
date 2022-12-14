import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: '#F19D9D',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontFamily: 'serif',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
});

export default styles;
