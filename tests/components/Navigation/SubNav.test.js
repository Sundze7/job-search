import { mount } from "@vue/test-utils";
import { useFilteredJobs } from "@/store/composables";
jest.mock("@/store/composables");

import useConfirmRoute from "@/composables/useComfirmRoute";
jest.mock("@/composables/useComfirmRoute");

import SubNav from "@/components/Navigation/SubNav";

describe("Subnav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when user is on job page", () => {
    it("displays job count", () => {
      useConfirmRoute.mockReturnValue(true);
      useFilteredJobs.mockReturnValue([{ id: 1 }, { id: 2 }]);
      const wrapper = mount(SubNav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("doea not display job count", () => {
      useConfirmRoute.mockReturnValue(false);
      useFilteredJobs.mockReturnValue([]);
      const wrapper = mount(SubNav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
