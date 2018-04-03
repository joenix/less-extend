<template>

	<div class="pretty">

		<section class="markdown grid-row-3">

			<article class="grid-col" v-for="value, name in colour" :key="name">

				<h2>{{ transfer[ name ] }}</h2>

				<div v-for="i in 10" :class="name + '-background-' + (i-1)">{{ name }}</div>

				<br />

			</article>

		</section>

	</div>

</template>

<script>

export default {

	data ()

	{

		return {

			transfer: {

				red: '朝暮',

				volcano: '火山',

				orange: '日暮',

				gold: '金盏花',

				yellow: '日出',

				lime: '青柠',

				green: '极光绿',

				cyan: '明青',

				blue: '拂晓蓝',

				geek: '极客蓝',

				purple: '酱紫',

				magenta: '洋红',

				smoke: '烟色'

			},

			colour: {

				// Dust Red: 薄暮
				red: '#f5222d',

				// Volcano: 火山
				volcano: '#fa541c',

				// Sunset Orange: 日暮
				orange: '#fa8c16',

				// Calendula Gold: 金盏花
				gold: '#faad14',

				// Sunrise Yellow: 日出
				yellow: '#fadb14',

				// Lime: 青柠
				lime: '#a0d911',

				// Polar Green: 极光绿
				green: '#52c41a',

				// Cyan: 明青
				cyan: '#13c2c2',

				// Daybreak Blue: 拂晓蓝
				blue: '#2490ff',

				// Geek Blue: 极客蓝
				geek: '#2f54eb',

				// Golden Purple: 酱紫
				purple: '#722ed1',

				// Magenta: 法式洋红
				magenta: '#eb2f96',

				// Smoke: 中性烟色
				smoke: '#bfbfbf'

			}

		}
	}
}

</script>
