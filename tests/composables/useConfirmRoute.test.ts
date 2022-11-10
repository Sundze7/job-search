import { useRoute } from "vue-router";
jest.mock("vue-router");

import useComfirmRoute from "@/composables/useComfirmRoute";

const useRouteMock = useRoute as jest.Mock;

describe("useConfimroute", () => {
  it("determine if page route matches specified route", () => {
    useRouteMock.mockReturnValue({ name: "Home" });
    const routeName = "Home";
    const result = useComfirmRoute(routeName);
    expect(result.value).toBe(true);
  });
});
