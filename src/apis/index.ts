import req from '../utils/request'

/**
 * 测试接口
 */

// 测试用Hello World
export const TestApi = () => req({ url: '/api/test', method: 'get' })

/**
 * 动态路由接口
 */
export const GetDynamicRoutes = () => req({ url: '/api/routes', method: 'get' })