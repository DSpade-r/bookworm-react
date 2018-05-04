import axios from 'axios';

export default {
    user: {
        login: (credentials) => 
            // рабочий вызов для примера
            axios.post('/api/auth', {credentials}).then(res => res.data.user)
            // рабочий вызов для Airvector API local
            // axios.get('http://localhost:55488/api.svc/denis/23', {credentials}).then(res => res.data.user)
            // рабочий вызов для Airvector API
            // axios.post('https://api.airvector-hvac.com/api.svc/auth', {user : credentials.email, pwd: credentials.password}).then(res => res.data.user)
    }
}