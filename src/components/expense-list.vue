<style lang="scss" scoped>
.wrapper {
  margin: 30px auto;
  width: 900px;
}
</style>

<template>
  <div class="wrapper">
    <Form>
      <Row>
        <Col>
          <FormItem label="title">
            <Input placeholder="search by title" />
          </FormItem>
          <FormItem label="category">
            <Select filterable>
              <Option v-for="item in category">{{ item.name }}</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <Table border :columns="columns" :data="data"></Table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ActionButtonList from './action-button-list.vue';

const columns = [
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
            { name: 'View', type: 'primary' },
            { name: 'Delete', type: 'error' }
          ]
        }
      });
    }
  }
];
const data = [
  {
    date: '2018-02-01',
    cost: 100,
  },
  {
    date: '2018-02-02',
    cost: 200,
  }
];

const category = [
  { id: 1, name: '交通' },
  { id: 2, name: '交通' },
  { id: 3, name: '交通' },
  { id: 4, name: '交通' },
  { id: 5, name: '交通' },
];

@Component
export default class ExpenseList extends Vue {
  columns: any[] = columns;
  data: any[] = data;
  category: any[] = category;
}
</script>