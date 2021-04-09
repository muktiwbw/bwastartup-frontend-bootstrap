<template>
  <div>
    <!-- Content -->
    <div class="cg-table">
      <div class="cg-table-header">
        <div class="cg-table-title">
          <span class="title-text"><NuxtLink to="#" class="link-gray mod-active">Projects</NuxtLink></span>
          <span class="title-text"><NuxtLink to="/dashboard/transactions" class="link-gray">Transactions</NuxtLink></span>
        </div>
        <div class="cg-table-action">
          <NuxtLink to="/dashboard/projects/create" class="cg-btn cl-secondary">Create new</NuxtLink>
        </div>
      </div>
      <table style="width: 100%;">
        <thead>
          <tr>
            <th>#</th>
            <th style="width: 20%;">Created at</th>
            <th style="width: 30%;">Project name</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(campaign, i) in campaigns" :key="i">
            <th>{{ i+1 }}</th>
            <td style="font-weight: 600;">{{ $dateFns.format(campaign.created_at, 'dd MMM yyyy') }}</td>
            <td style="font-weight: 600;"><NuxtLink class="link-secondary" :to="`/dashboard/projects/${campaign.id}`">{{ campaign.name }}</NuxtLink></td>
            <td>
              <div class="progress mb-2">
                <div class="progress-bar progress-bar-striped" :style="`width:${campaign.current_amount / campaign.goal_amount * 100}%`"></div>
              </div>
              <div class="progress-detail d-flex justify-content-between">
                <span><strong>{{ (campaign.current_amount / campaign.goal_amount * 100).toFixed(2) }}%</strong> <small>({{ campaign.backers_count }} backers)</small></span>
                <span>Rp {{ new Intl.NumberFormat('id-ID').format(campaign.goal_amount) }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const campaigns = await $axios.$get('/api/v1/me/campaigns')

    return { campaigns: campaigns.data } // This is supposed to mimic the data() property
  }
}
</script>