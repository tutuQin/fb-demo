import service from "../services/IndexPage";

export default {

  namespace: 'indexPage',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getTest({ payload }, { call, put }) {  // eslint-disable-line
      console.log('2')
      const result = yield call(service.test, payload);
      console.log('diayong ',result)
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
