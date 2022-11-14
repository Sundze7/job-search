import { mount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import JobFiltersSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue";

describe("JobFilterSidebarPrompt", () => {
  describe("when user clicks clear filter button", () => {
    it("sends message to clear all of user's job search filters", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit });
      const wrapper = mount(JobFiltersSidebarPrompt);
      const button = wrapper.find("[data-test='clear-user-job-filters']");
      await button.trigger("click");
      expect(commit).toHaveBeenCalledWith("CLEAR_USER_JOB_FILTER_SELECTIONS");
    });
  });
});
