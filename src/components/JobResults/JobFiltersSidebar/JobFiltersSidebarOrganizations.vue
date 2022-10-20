<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrganiazations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              :data-test="organization"
              @change="selectedOrganiazation"
            />
            <label :for="organization" data-test="organization">{{
              organization
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import {
  ADD_SELECTED_ORGANIZATIONS,
  UNIQUE_ORGANIZATIONS,
} from "@/store/contants";

import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedOrganiazations: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]),
    // UNIQUE_ORGANIZATIONS() {
    //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
    // },
  },
  methods: {
    ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),
    selectedOrganiazation() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganiazations);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>
