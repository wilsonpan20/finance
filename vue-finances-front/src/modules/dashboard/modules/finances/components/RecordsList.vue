<template>
  <div>
    <v-list two-line subheader>

      <template v-for="(records, date, index) in mappedRecords">
        <v-subheader :key="date">{{ date }}</v-subheader>
        <RecordsListItem v-for="record in records" :key="record.id" :record="record" />
        <v-divider :key="`${date}-${index}`" v-if="showDivider(index, mappedRecords)"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>

import { groupBy } from '@/utils'
import moment from 'moment'
import RecordsListItem from './RecordsListItem.vue'
import RecordsServices from './../services/records-services'
export default {
  name: 'RecordsList',
  components: {
    RecordsListItem
  },
  data: () => ({
    records: []
  }),
  computed: {
    mappedRecords () {
      return groupBy(this.records, 'date', (record, dateKey) => {
        return moment(record[dateKey]).format('DD/MM/YYYY')
      })
    }

  },

  async created () {
    this.records = await RecordsServices.records()
  },
  methods: {
    showDivider (index, object) {
      return index < Object.keys(object).length - 1
    }
  }
}
</script>
