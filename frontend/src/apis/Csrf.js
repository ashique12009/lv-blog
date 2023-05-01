import Api from '@/apis/Api';

export default {
    getCookie() {
        return Api.get('/csrf-cookie');
    }
}