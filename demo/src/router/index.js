import Vue from 'vue';
import Router from 'vue-router';
import Importz from 'importz';

Vue.use(Router);


const List = [

	'index',

		'description',

		'install',

		'start',

	'preset',

		'safe',

		'colour',

		'size',

		'unit',

		'speed',

		'family',

	'resetting',

		'reset',

		'gorgeous',

	'extend',

		'dimension',

		'font',

		'text',

		'column',

		'link',

		'color',

		'border',

		'background',

		'opacity',

		'radius',

		'shadow',

		'list',

		'content',

		'float',

		'position',

		'display',

		'clip',

		'flex',

		'table',

		'resize',

		'cursor',

		'transition',

		'transform',

		'animation',

		'print',

	'kit',

		'pre',

		'key',

		'grid',

		'tink',

		'chess',

	'plugin',

		'markdown'

];


const Page = Importz(

	List,

	( name, cip ) => {

		return cip( require('@/component/' + name + '.vue') );

	}

);

const Config = List.map(

	( name ) => {

		return {

			path: '/' + name,

			name: name,

			component: Page[ name ]

		}

	}

);


export default new Router({

	routes: [

		{
			path: '/',
			redirect: '/index'
		},

		...Config

	]

})
