<template>

	<div class="pretty">

		<section class="markdown">

			<article>

				<h1>{LESS-EXTEND} is a less extention for faster efficient develop.</h1>

				<blockquote>

					<h2>package.json:</h2>

					<ul>

						<li v-for="value, key in Package" :key="key">{{ key }}: {{ value }}</li>

					</ul>

				</blockquote>

			</article>

		</section>

	</div>

</template>

<script>
import Package from '../../../package.json';

export default {
	data ()
	{
		return {

			Package: Package

		}
	},
}
</script>
