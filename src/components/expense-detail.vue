<template>
  <div>
    <AddableTable addButtonName="New Item" :width="1000" :columns="columns" :data="data">
      <DatePicker slot="extra-left" :value="date" type="date" placeholder="Select date"></DatePicker>
    </AddableTable>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AddableTable from './addable-table.vue';

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
      return h("div", [
        h(
          "Button",
          {
            props: {
              type: "primary",
              size: "small"
            },
            style: {
              marginRight: "5px"
            }
          },
          "Edit"
        ),
        h(
          "Button",
          {
            props: {
              type: "error",
              size: "small"
            }
          },
          "Delete"
        )
      ]);
    }
  }
];
const data = [
  { title: '外卖', category: '饮食', tags: ['奢侈', '日常'] },
  { title: '外卖', category: '饮食', tags: ['奢侈', '日常'] },
  { title: '外卖', category: '饮食', tags: ['奢侈', '日常'] },
  { title: '外卖', category: '饮食', tags: [] },
  { title: '外卖', category: '饮食', tags: ['奢侈', '日常'] },
];

@Component({
  components: {
    AddableTable,
  }
})
export default class ExpenseDetail extends Vue {
  columns: any[] = columns;
  data: any[] = data;

  get date(): string {
    let dateStr: string = this.$route.params.date;
    if (dateStr !== 'undefined') {
      return dateStr;
    }

    return '';
  }

  // get data(): any[] {
  //   return data;
  // }
}
</script>