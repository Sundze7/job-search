import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobsProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "AirBnB",
    locatons: ["Indianapolis"],
    minimumQualifications: ["Decapolis"],
    ...jobProps,
  });

  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const jobProps = createJobsProps({ title: "Vue Programmer" });

    const wrapper = mount(JobListing, createConfig(jobProps));

    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("renders job organization", () => {
    const jobProps = createJobsProps({ organization: "AirBnB" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("AirBnB");
  });

  it("renders job locations", () => {
    const jobProps = createJobsProps({
      locations: ["Orlando", "Jacksonville"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("Jacksonville");
  });

  it("renders job qualifications", () => {
    const jobProps = createJobsProps({
      minimumQualifications: ["Code", "Develop"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });

  it("links to individual job's page", () => {
    const jobProps = createJobsProps({ id: 15 });
    const wrapper = mount(JobListing, createConfig(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
