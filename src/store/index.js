import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    about:[]
  },
  getters:{
    about(state){
      return state.about
    }
  },
  actions:{
    fetchAboutPage(context){
      axios.get('http://msk.localhost/api/?option=com_ajax&module=articles_latest&method=getArticle&format=json&id=1',{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response)=>{
        const about = response.data.data
        context.commit('setAboutPage', about )
      })
    }
  },
  mutations:{
    setAboutPage(state, about){
      state.about = about
    }
  }
})
