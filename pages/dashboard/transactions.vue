<template>
  <div>
    <!-- Content -->
    <div class="cg-table">
      <div class="cg-table-header">
        <div class="cg-table-title">
          <span class="title-text"><NuxtLink to="/dashboard/projects" class="link-gray">Projects</NuxtLink></span>
          <span class="title-text"><NuxtLink to="#" class="link-gray mod-active">Transactions</NuxtLink></span>
        </div>
      </div>
      <table style="width: 100%;">
        <thead>
          <tr>
            <th>#</th>
            <th style="width: 15%;">Created at</th>
            <th style="width: 20%;">Transaction number</th>
            <th style="width: 35%;">Project funded</th>
            <th>Fund amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(transaction, i) in transactions" :key="i">
            <th>{{ i+1 }}</th>
            <td style="font-weight: 600;">{{ $dateFns.format(transaction.created_at, 'dd MMM yyyy') }}</td>
            <td>{{ transaction.code }}</td>
            <td style="font-weight: 600;"><NuxtLink class="link-secondary" :to="`/dashboard/projects/${transaction.campaign.id}`">{{ transaction.campaign.name }}</NuxtLink></td>
            <td>Rp {{ new Intl.NumberFormat('id-ID').format(transaction.amount) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.get('/api/v1/me/transactions')

    return { transactions: res.data.data }
  }
}
</script>