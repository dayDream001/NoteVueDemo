import Axios from 'axios'
Axios.defaults.timeout = 5000
Axios.defaults.withCredentials = true
Axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
