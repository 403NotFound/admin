import { getToken } from 'utils/auth';
const state = {
  token: getToken(),
  name: '',
}

export default state
