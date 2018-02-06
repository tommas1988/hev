<template>
  <div>
    <AddableTable addButtonName="New Item" :width="1000" :columns="columns" :data="expenseItems">
      <DatePicker slot="extra-left" :value="date" type="date" placeholder="Select date"></DatePicker>
    </AddableTable>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AddableTable from './addable-table.vue';
import ActionButtonList from './action-button-list.vue';

const columns = [
  {
    title: 'Title',
    key: 'title',
    align: 'center'
  },
  {
    title: 'Category',
    key: 'category',
    align: 'center'
  },
  {
    title: 'Tags',
    key: 'tags',
    align: 'center',
    render: (h, params) => {
      if (params.row.tags.length > 0) {
        let children = [];
        for (let name of params.row.tags) {
          children.push(h('Tag', name));
        }
        return h('div', children);
      }
    }
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

@Component({
  components: {
    AddableTable
  }
})
export default class ExpenseDetail extends Vue {
  columns: any[] = columns;

  get date(): string {
    let params = this.$route.params;

    if (params.id) {
      return '2018-02-10';
    } else if (params.date) {
      return params.date;
    }

    return '';
  }

  get expenseItems(): any[] {
    if (this.$route.params.id) {
      return [
        { title: '外卖', category: '饮食', tags: ['奢侈', '日常'] },
        { title: '外卖', category: '饮食', tags: ['奢侈', '日常'] },
        { title: '外卖', category: '饮食', tags: ['奢侈', '日常'] },
        { title: '外卖', category: '饮食', tags: [] },
        { title: '外卖', category: '饮食', tags: ['奢侈', '日常'] }
      ];
    }

    return [];
  }
}
</script>