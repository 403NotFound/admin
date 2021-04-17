const mutations = {
  SET_TOKEN: (state, token) => {
    console.log(token)
    state.token = token
  },
}

export default mutations
