import { Store } from "../common/store/store";
import { Registry } from "../common/store/registry";

export const LOGIN = "LOGIN";

const AuthStore = new Store("auth", {
  data: {

  },
  options: {
    shouldInitFromState: true,
    stateKey: "auth",
  },
  reducers: [
    {
      type: LOGIN,
      action(state, payload) {

      }
    }
  ],
});

Registry.addStore(AuthStore);

export { AuthStore };