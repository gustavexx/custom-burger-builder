import axios from 'axios';

const instance= axios.create({
    baseURL:"https://burger-builder-custom.firebaseio.com/"
});
export default instance;