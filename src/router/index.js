import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/components/auth/Login.vue";
import MainPage from "@/components/auth/MainPage.vue";
import Register from "@/components/auth/Register.vue";
import RegisterSuccess from "@/components/auth/RegisterSuccess.vue";
import Home from "@/components/layout/Home.vue";
import Discover from "@/components/contents/Discover.vue";
import Profile from "@/components/contents/Profile.vue";
import PageNotFound from "@/components/layout/PageNotFound.vue";

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
		path: '/', name: 'Home', component: Home, redirect: '/home',
		children: [
			{path: '/home', name: 'Discover', component: Discover},
			{path: '/profile', name: 'Profile', component: Profile},
			{path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound},
		]
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router