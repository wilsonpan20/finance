<template>
  <div>
    <TotalBalance class="mb-2" />
    <toolbar-by-month class="mb-2" format="MM-YYYY" @month="changeMonth" :color="toolbarColor"
      :month="$route.query.month" />
    <v-card>
      <v-card-text class="text-xs-center" v-if="mappedRecordsLenght === 0">
        <v-icon size="100" color="grey">assignment</v-icon>
        <p class="font-weigth-light subheading grey--text">
          Nenhum lançamento no período
        </p>

      </v-card-text>
      <v-list two-line subheader v-else>
        <template v-for="(records, date, index) in mappedRecords">
          <v-subheader :key="date">{{ date }}</v-subheader>
          <RecordsListItem v-for="record in records" :key="record.id" :record="record" />
          <v-divider :key="`${date}-${index}`" v-if="showDivider(index, mappedRecords)"></v-divider>
        </template>
      </v-list>
      <v-footer class="pa-2">
        <v-flex text-xs-right>
          <h3 class="font-weight-light">
            <span>Saldo do mês:</span>
            <strong class="ml-5" :class="amountColor(totalAmount)"> {{ formatCurrency(totalAmount) }}</strong>
          </h3>
        </v-flex>
      </v-footer>
    </v-card>
  </div>
</template>

<script>
import amountColorMixin from './../mixins/amount-color'
import formatCurrencyMixin from '@/mixins/format-currency'
import { groupBy } from '@/utils'
import moment from 'moment'
import RecordsListItem from './RecordsListItem.vue'
import RecordsServices from './../services/records-services'
import ToolbarByMonth from './ToolbarByMonth.vue'
import TotalBalance from './TotalBalance.vue'
export default {
  name: 'RecordsList',
  mixins: [amountColorMixin, formatCurrencyMixin],
  components: {
    RecordsListItem,
    ToolbarByMonth,
    TotalBalance
  },
  data: () => ({
    records: []
  }),
  computed: {
    mappedRecords () {
      return groupBy(this.records, 'date', (record, dateKey) => {
        return moment(record[dateKey]).format('DD/MM/YYYY')
      })
    },
    mappedRecordsLenght () {
      return Object.keys(this.mappedRecords).length
    },
    totalAmount () {
      return this.records.reduce((sum, record) => sum + record.amount, 0)
    },
    toolbarColor () {
      return this.totalAmount < 0 ? 'error' : 'primary'
    }

  },

  methods: {
    showDivider (index, object) {
      return index < Object.keys(object).length - 1
    },
    changeMonth (month) {
      this.$router.push({
        path: this.$route.path,
        query: { month }
      })
      this.setRecords(month)
    },
    async setRecords (month) {
      this.records = await RecordsServices.records({ month })
    }
  }
}
</script>
