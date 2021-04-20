import { getToken } from 'utils/auth'
const state = {
  token: getToken(),
  name: '',
  roles: {},
  avatar: '',
  introduction: '',
  routes: [],
  sidebarOpend: true,
}

export default state
