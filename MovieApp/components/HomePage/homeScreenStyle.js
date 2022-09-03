import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#DCDCDC',
  },
  item: {
    backgroundColor: '#013220',
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: '#ffffff',
  },
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#013220',
    marginHorizontal: 16,
  },
  connectedView: {
    flexDirection: 'row',
    marginVertical: 8,
  },
});

export default styles;
