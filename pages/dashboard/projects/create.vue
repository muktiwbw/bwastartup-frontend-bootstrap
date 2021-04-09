<template>
  <div>
    <div class="cg-form">
      <div class="form-header">
        <h1>Create new project</h1>
      </div>
      <div class="form-body">    
        <form>
          <div class="mb-4">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="name">Campaign name</label>
                  <input v-model="campaign.name" type="text" class="form-control gf-form" id="name" placeholder="Enter campaign name">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="goal-amount">Goal amount</label>
                  <input v-model="campaign.goal_amount" type="number" class="form-control gf-form" id="goal-amount" placeholder="Enter goal amount">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="highlight">Highlight</label>
              <input v-model="campaign.highlight" type="text" class="form-control gf-form" id="highlight" placeholder="Enter highlight">
            </div>
            <div class="form-group">
              <label for="perks">Perks</label>
              <input v-model="campaign.perks" type="text" class="form-control gf-form" id="perks" placeholder="Separate with pipe '|'">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea v-model="campaign.description" id="description" class="form-control gf-form"></textarea>
            </div>
          </div>
          <div class="form-action">
            <button @click="createCampaign" class="cg-btn cl-secondary">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campaign: {
        name: '',
        goal_amount: '',
        highlight: '',
        perks: '',
        description: '',
      },
    }
  },
  methods: {
    async createCampaign(e) {
      e.preventDefault()

      try {
        const newCampaign = this.campaign
        newCampaign.goal_amount = Number.parseInt(this.campaign.goal_amount)
        
        await this.$axios.post('/api/v1/campaigns', newCampaign)

        this.$router.push('/dashboard/projects')
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>