<template>

	<div class="pretty">

		<section class="markdown">

			<article>

				<h1>Cursor</h1>

			</article>

		</section>

		<section class="markdown">

			<article>

				<blockquote>

<pre>
<code class="lang-less">
// 鼠标手型
.cursor( auto );

// 穿透点击
.point-event( auto );

// 无穿透
.point-none;

// 可穿透
.point-can;
</code>
</pre>

				</blockquote>

			</article>

			<article v-for="list, key in group" :key="key">

				<h2>{{ key }}</h2>

				<kbd v-for="one, index in list" :key="index" :class="one">{{ one }}</kbd>

			</article>

		</section>

	</div>

</template>

<script>
export default {

	data ()
	{
		return {

			group: {

				cursor: [

					'hand',

					'hand-none',

					'hand-move',

					'hand-copy',

					'hand-url',

					'hand-wait',

					'hand-progress',

					'hand-help',

					'hand-alias',

					'hand-cross',

					'hand-not'

				],

				text: [

					'hand-text',

					'hand-text-horizontal',

					'hand-text-vertical',

					'hand-menu'

				],

				zoom: [

					'zoom-in',

					'zoom-out'

				],

				direct: [

					'hand-top',

					'hand-left',

					'hand-right',

					'hand-bottom',

					'hand-top-left hand-left-top',

					'hand-top-right hand-right-top',

					'hand-bottom-leftand-left-bottom',

					'hand-bottom-right hand-right-bottom',

					'hand-left-right',

					'hand-top-bottom',

					'hand-corner-left',

					'hand-corner-right',

					'hand-stretch-horizontal',

					'hand-stretch-vertical',

					'hand-scroll'

				]

			}

		}
	}

}
</script>
