import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/components/Auth/Login.vue";
import MainPage from "@/components/Auth/MainPage.vue";
import Register from "@/components/Auth/Register.vue";

const routes = [
	{path: '/', redirect: '/login'},
	{
		path: '/login', name: 'MainPage', component: MainPage,
		children: [
			{path: '', name: 'Login', component: Login},
			{path: '/register', name: 'Register', component: Register},
		]
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router