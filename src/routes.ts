import Category from './components/category.vue';
import Tag from './components/tag.vue';
import ExpenseDetail from './components/expense-detail.vue';
import ExpenseList from './components/expense-list.vue';
import Stats from './components/stats.vue';

const routes = [
    {
        path: '/settings/category',
        name: 'category-setting',
        component: Category
    },
    {
        path: '/settings/tag',
        name: 'tag-setting',
        component: Tag
    },
    {
        path: '/expense/new',
        name: 'expense-new',
        component: ExpenseDetail
    },
    {
        path: '/expense/new/:date',
        name: 'expense-new-with-date',
        component: ExpenseDetail
    },
    {
        path: '/expense/list',
        name: 'expense-list',
        component: ExpenseList
    },
    {
        path: '/expense/:id',
        name: 'expense-detail',
        component: ExpenseDetail
    },
    {
        path: '/stats',
        name: 'stats',
        component: Stats
    },
];

export default routes;