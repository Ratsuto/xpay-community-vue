import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/components/auth/Login.vue";
import MainPage from "@/components/auth/MainPage.vue";
import Register from "@/components/auth/Register.vue";
import RegisterSuccess from "@/components/auth/RegisterSuccess.vue";
import Home from "@/components/layout/Home.vue";
import Discover from "@/components/contents/Discover.vue";

const routes = [
	{path: '/', redirect: '/login'},
	{
		path: '/login', name: 'MainPage', component: MainPage,
		children: [
			{path: '', name: 'Login', component: Login},
			{path: '/register', name: 'Register', component: Register},
			{path: '/register-success', name: 'RegisterSuccess', component: RegisterSuccess},
		]
	},
	{
		path: '/home', name: 'Home', component: Home, children: [
			{path: '', name: 'Discover', component: Discover},
		]
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router