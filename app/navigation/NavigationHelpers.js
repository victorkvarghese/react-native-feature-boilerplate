/*
 * Actions related with navigation
 * Every navigation action should be defined here
 * Avoid using this.props.navigation inside the code
 */
import NavigationService from './NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('Home', params);
}
