import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3f526e12e7ae41e897f823bd1c2581de',
        });
    }
}

export default AppLoader;
