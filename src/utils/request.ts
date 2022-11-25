import axios from 'axios'

// axios对象
const service = axios.create({
    // axios请求基础URL
    // 由于本项目使用mock + vite-plugin-mock启动的mock服务，默认使用的端口号与页面一致
    baseURL: "http://localhost:5173",
    timeout: 5000
})

export default service