/* 
 * combines all th existing reducers
 */
import * as loginReducer from 'app/features/login/reducers';
export default Object.assign({}, loginReducer);
