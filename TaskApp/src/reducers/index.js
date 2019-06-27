import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  abc: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
