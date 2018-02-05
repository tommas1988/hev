<template>
  <AddableTable addButtonName="New Category" :width="700" :columns="columns" :data="data"></AddableTable>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import AddableTable from "./addable-table.vue";

const columns = [
  {
    title: "Name",
    key: "name",
    align: "center"
  },
  {
    title: "Status",
    key: "status",
    align: "center",
    width: 200,
    render: (h, params) => {
      const size = 16;
      const style = {
        marginRight: "5px"
      };

      if (params.row.status === "enable") {
        return h("div", [
          h("Icon", {
            props: {
              type: "eye",
              color: "#19be6b",
              size
            },
            style
          }),
          h("span", "enable")
        ]);
      } else {
        return h("div", [
          h("Icon", {
            props: {
              type: "eye-disabled",
              color: "#ed3f14",
              size
            },
            style
          }),
          h("span", "disabled")
        ]);
      }
    }
  },
  {
    title: "Action",
    align: "center",
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
  { name: "交通", status: "enable" },
  { name: "交通", status: "enable" },
  { name: "交通", status: "disable" },
  { name: "交通", status: "enable" },
  { name: "交通", status: "disable" },
  { name: "交通", status: "enable" }
];

@Component({
  components: {
    AddableTable
  }
})
export default class Category extends Vue {
  columns: any[] = columns;
  data: any[] = data;
}
</script>