import { AppRegistry } from 'react-native';
import App from './App';
import SimpleList from './SimpleList';
import BookItem from './BookItem';
import MockBookList from './MockBookList';


AppRegistry.registerComponent('Bestsellers', () => MockBookList);
