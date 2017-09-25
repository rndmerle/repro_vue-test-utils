import { shallow } from "vue-test-utils";
import App from "./App.vue";

describe("App", () => {
    it("displays content", () => {
        const wrapper = shallow(App);
        expect(wrapper.text()).toEqual("Test");
    });
});
