<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  line-height: 30px;
  padding-left: 35px;
  color: aliceblue;
}
.layout-nav {
  float: right;
  margin: 0 auto;
  /* margin-right: 20px; */
}
.layout-content {
  min-height: calc(100vh - 136px);
}
.layout-footer {
  height: 70px;
  text-align: center;
}
</style>

<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" @on-select="goto">
          <div class="layout-logo">HEV</div>
          <div class="layout-nav">
            <MenuItem name="stats">
              <Icon type="stats-bars"></Icon>
              Statistic
            </MenuItem>
            <Submenu name="expense">
              <template slot="title">
                <Icon type="social-yen"></Icon>
                Expense
              </template>
              <MenuItem name="expense-new">
                Add
              </MenuItem>
              <MenuItem name="expense-list">
                List
              </MenuItem>
            </Submenu>
            <Submenu name="settings">
              <template slot="title">
                <Icon type="settings"></Icon>
                Settings
              </template>
              <MenuItem name="category-setting">
                Category
              </MenuItem>
              <MenuItem name="tag-setting">
                Tag
              </MenuItem>
            </Submenu>
          </div>
        </Menu>
      </Header>
      <Content class="layout-content">
        <!-- <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="min-height: 200px;">
                        Content
                    </div>
                </Card> -->
        <router-view></router-view>
      </Content>
      <Footer class="layout-footer">2018-2019 &copy; Tommas</Footer>
    </Layout>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import routes from './routes';

@Component
export default class App extends Vue {
  beforeCreate() {
    this.$router.addRoutes(routes);
  }

  goto(name: string) {
    for (let route of routes) {
      if (route.name === name) {
        this.$router.push({ path: route.path });
        return;
      }
    }
  }
}
</script>
