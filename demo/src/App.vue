<template>

	<div id="app" class="app">

		<heador />

		<asidor />

		<main>

			<router-view />

		</main>

	</div>

</template>

<script>
import heador from '@/component/import/header';
import asidor from '@/component/import/asider';
import mainor from '@/component/import/main';

export default {
	components: {
		heador,
		asidor,
		mainor
	},

	watch: {
		'$route' ()
		{
			return (

				( out ) => {

					out = setTimeout(

						() => {

							clearTimeout(

								(this.render(), out)

							);

						},

						240

					);

				}

			)

			();

		}
	},

	methods: {

		render ()
		{
			return (

				( code, i ) => {

					if ( code.length )
					{

						for ( i = code.length; i--; )
						{
							this.$highlight.highlightBlock( code[ i ] )
						}

					}

				}

			)

			( document.querySelectorAll('code') );

		}
	},

	mounted ()
	{
		return this.render();
	}
}
</script>
