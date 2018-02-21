<style lang="scss" scoped>
.expense-list {
  margin: 30px auto;
  width: 900px;

  .condition {
    margin: 10px 20px 40px;
  }
}
</style>

<template>
  <div class="expense-list">
    <div class="condition">
      <Row :gutter="10">
        <Col span="8">
          <LabeledControl label="Title:">
            <Input placeholder="search by title" />
          </LabeledControl>
        </Col>
        <Col span="8">
          <LabeledControl label="Categories:">
            <Select v-model="selectedCategories" filterable multiple>
              <Option v-for="category in categories" :value="category.id">{{ category.name }}</Option>
            </Select>
          </LabeledControl>
        </Col>
        <Col span="8">
          <LabeledControl label="Tags:">
            <Select v-model="selectedTags" filterable multiple>
              <Option v-for="tag in tags" :value="tag.id">{{ tag.name }}</Option>
            </Select>
          </LabeledControl>
        </Col>
      </Row>
      <br/>
      <Row :gutter="10">
        <Col span="8">
          <LabeledControl label="Date:">
            <DatePicker type="daterange" placeholder="Select date" style="width: 200px"></DatePicker>
          </LabeledControl>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col span="2" offset="22">
          <Button type="primary" icon="ios-search">Search</Button>
        </Col>
      </Row>
    </div>

    <Table border :columns="columns" :data="data"></Table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ActionButtonList from './action-button-list.vue';
import LabeledControl from './labeled-control.vue';

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
    cost: 100
  },
  {
    date: '2018-02-02',
    cost: 200
  }
];

const categories = [
  { id: 1, name: '交通1' },
  { id: 2, name: '交通2' },
  { id: 3, name: '交通3' },
  { id: 4, name: '交通4' },
  { id: 5, name: '交通5' }
];

const tags = [
  { id: 1, name: '外卖1' },
  { id: 2, name: '外卖2' },
  { id: 3, name: '外卖3' },
  { id: 4, name: '外卖4' },
  { id: 5, name: '外卖5' }
];

@Component({
  components: {
    LabeledControl
  }
})
export default class ExpenseList extends Vue {
  columns: any[] = columns;
  data: any[] = data;
  categories: any[] = categories;
  tags: any[] = tags;

  selectedCategories: any[] = [];
  selectedTags: any[] = [];
}
</script>