<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-blue-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What Do You Want To Do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <accordion header="Degree" />

      <job-filters-sidebar-job-types />

      <job-filters-sidebar-organizations />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarJobTypes,
  },
};
</script>
