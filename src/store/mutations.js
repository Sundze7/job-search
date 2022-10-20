import {
  LOGIN_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
} from "@/store/contants";

const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state, JobTypes) {
    state.selectedJobTypes = JobTypes;
  },
};

export default mutations;
