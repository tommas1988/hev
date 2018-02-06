<style lang="scss" scoped>
.wrapper {
  margin: 30px auto;
  width: 900px;
}
</style>

<template>
  <div class="wrapper">
    <Table border :columns="columns" :data="data"></Table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ActionButtonList from './action-button-list.vue';

const columns = [
  {
    type: 'expand',
    width: 50,
    render: (h, params) => {
      return h('div', 'Expand Content');
    }
  },
  {
    title: 'Date',
    key: 'date',
    align: 'center'
  },
  {
    title: 'Total Cost',
    key: 'cost',
    align: 'center'
  },
  {
    title: 'Action',
    align: 'center',
    width: 200,
    render: (h, params) => {
      return h(ActionButtonList, {
        props: {
          buttons: [
            { name: 'Edit', type: 'primary' },
            { name: 'Delete', type: 'error' }
          ]
        }
      });
    }
  }
];
const data = [];

@Component
export default class ExpenseList extends Vue {
  columns: any[] = columns;
  data: any[] = data;
}
</script>