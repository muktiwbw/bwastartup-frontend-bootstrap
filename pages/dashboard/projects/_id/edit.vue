<template>
  <div>
    <div class="cg-form">
      <div class="form-header">
        <h1>Edit project</h1>
      </div>
      <div class="form-body">    
        <form>
          <div class="mb-4">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="name">Campaign name</label>
                  <input type="text" class="form-control gf-form" id="name" placeholder="Enter project name" v-model="campaign.name">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="goal-amount">Goal amount</label>
                  <input type="number" class="form-control gf-form" id="goal-amount" placeholder="Enter goal amount" v-model="campaign.goal_amount">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="highlight">Highlight</label>
              <input type="text" class="form-control gf-form" id="highlight" placeholder="Enter highlight" v-model="campaign.highlight">
            </div>
            <div class="form-group">
              <label for="perks">Perks</label>
              <input type="text" class="form-control gf-form" id="perks" placeholder="Separate with pipe '|'" v-model="campaign.perks">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea id="description" class="form-control gf-form" v-model="campaign.description"></textarea>
            </div>
          </div>
          <div class="form-action">
            <button class="cg-btn cl-secondary" @click="updateCampaign">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const campaign = await $axios.get(`/api/v1/campaigns/${params.id}`)

    return { campaign: campaign.data.data }
  },
  methods: {
    async updateCampaign() {
      const campaignID = this.$route.params.id
      const newCampaign = {
        name: this.campaign.name,
        goal_amount: Number.parseInt(this.campaign.goal_amount),
        highlight: this.campaign.highlight,
        perks: this.campaign.perks,
        description: this.campaign.description,
      }

      try {
        await this.$axios.patch(`/api/v1/campaigns/${campaignID}`, newCampaign)

        this.$router.push(`/dashboard/projects/${campaignID}`)
      } catch (error) {
        console.log(error.response);
      }
    }
  }
}
</script>