import HomePage from './routes/home/index'
import PageDetail from './routes/home/detail'
import TestPage from './routes/home/test'

const router = [
  {
    path : '/',
    component: HomePage
  },
  {
    path: '/home/page/:id/detail/',
    component: PageDetail
  },
  {
    path: '/home/test',
    component: TestPage
  }
]

export default router
