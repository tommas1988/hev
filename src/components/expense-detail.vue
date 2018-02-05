<template>
  <div>
    <AddableTable addButtonName="New Item" :width="1000" :columns="columns" :data="data">
      <DatePicker slot="extra-left" type="date" placeholder="Select date"></DatePicker>
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
    align: 'center'
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
const data = [];

@Component({
  components: {
    AddableTable,
  }
})
export default class ExpenseDetail extends Vue {
  columns: any[] = columns;
  data: any[] = data;
}
</script>