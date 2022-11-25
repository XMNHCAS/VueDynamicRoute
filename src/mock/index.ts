import { MockMethod } from "vite-plugin-mock"

const mock: Array<MockMethod> = [
    /**
     * 测试接口
     */
    {
        // 接口路径
        url: '/api/test',

        // 接口方法
        method: 'get',

        // 返回数据
        response: () => {
            return {
                status: 200,
                message: 'success',
                data: 'Hello World'
            }
        }
    }, 
    /**
     * 路由数据接口
     */
    {
        url: '/api/routes',
        method: 'get',
        response: () => {
            // 路由
            const routes = [
                {
                    path: '/PageOne',
                    name: 'PageOne',
                    component: 'PageOne.vue'
                }, {
                    path: '/PageTwo',
                    name: 'PageTwo',
                    component: 'PageTwo.vue'
                }, {
                    path: '/PageThree',
                    name: 'PageThree',
                    component: 'PageThree.vue',
                }
            ]

            return {
                status: 200,
                message: 'success',
                data: routes
            }
        }
    }
]

export default mock