<template>
  <AddableTable addButtonName="New Tag" :width="500" :columns="columns" :data="data"></AddableTable>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AddableTable from './addable-table.vue';
import ActionButtonList from './action-button-list.vue';
import IconText from './icon-text.vue';

const columns = [
  {
    title: 'Name',
    key: 'name',
    align: 'center'
  },
  {
    title: 'Status',
    key: 'status',
    align: 'center',
    width: 200,
    render: (h, params) => {
      let icon: any = { size: 16 };
      let text: string;

      if (params.row.status === 'enable') {
        icon.type = 'eye';
        icon.color = '#19be6b';
        text = 'enable';
      } else {
        icon.type = 'eye-disabled';
        icon.color = '#ed3f14';
        text = 'disable';
      }

      return h(IconText, {
        props: { icon, text }
      });
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
const data = [];

@Component({
  components: {
    AddableTable
  }
})
export default class Tag extends Vue {
  columns: any[] = columns;
  data: any[] = data;
}
</script>