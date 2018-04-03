<template>

	<div class="pretty">

		<section class="markdown">

			<article>

				<h1>Safe Colour ( #147 )</h1>

				<div v-for="group, cat in colour" :key="cat">

					<h4>{{ cat }}</h4>

					<kbd v-for="name, index in group" :key="index" :style="{ backgroundColor: name }" class="color">@{{ name }}</kbd>

				</div>

			</article>

		</section>

	</div>

</template>

<script>
export default {

	data ()
	{
		return {

			colour: {

				// Pink
				Pink: [
					'DeepPink',
					'HotPink',
					'LightPink',
					'MediumVioletRed',
					'PaleVioletRed',
					'Pink',
				],

				// Red
				Red: [
					'Crimson',
					'DarkRed',
					'DarkSalmon',
					'FireBrick',
					'IndianRed',
					'LightCoral',
					'LightSalmon',
					'Red',
					'Salmon',
				],

				// Orange
				Orange: [
					'Coral',
					'DarkOrange',
					'Gold',
					'Orange',
					'OrangeRed',
					'Tomato',
				],

				// Yellow
				Yellow: [
					'DarkKhaki',
					'Khaki',
					'LemonChiffon',
					'LightGoldenRodYellow',
					'LightYellow',
					'Moccasin',
					'PaleGoldenRod',
					'PapayaWhip',
					'PeachPuff',
					'Yellow',
				],

				// Brown
				Brown: [
					'Bisque',
					'BlanchedAlmond',
					'Brown',
					'BurlyWood',
					'Chocolate',
					'Cornsilk',
					'DarkGoldenRod',
					'Goldenrod',
					'Maroon',
					'Peru',
					'RosyBrown',
					'SaddleBrown',
					'SandyBrown',
					'Sienna',
					'Tan',
					'Wheat',
				],

				// Green
				Green: [
					'Chartreuse',
					'DarkGreen',
					'DarkOliveGreen',
					'DarkSeaGreen',
					'ForestGreen',
					'Green',
					'GreenYellow',
					'LawnGreen',
					'LightGreen',
					'Lime',
					'LimeGreen',
					'MediumSeaGreen',
					'MediumSpringGreen',
					'Olive',
					'OliveDrab',
					'PaleGreen',
					'SeaGreen',
					'SpringGreen',
					'YellowGreen',
				],

				// Cyan
				Cyan: [
					'CadetBlue',
					'Cyan',
					'DarkCyan',
					'LightCyan',
					'Teal',
				],

				// Blue
				Blue: [
					'Blue',
					'BlueViolet',
					'CornflowerBlue',
					'DarkBlue',
					'DeepSkyBlue',
					'DodgerBlue',
					'LightBlue',
					'LightSkyBlue',
					'LightSteelBlue',
					'MediumBlue',
					'MidnightBlue',
					'Navy',
					'PowderBlue',
					'RoyalBlue',
					'SkyBlue',
					'SteelBlue',
				],

				// Purple
				Purple: [
					'DarkMagenta',
					'DarkOrchid',
					'DarkSlateBlue',
					'DarkViolet',
					'Fuchsia',
					'Indigo',
					'Lavender',
					'Magenta',
					'MediumOrchid',
					'MediumPurple',
					'MediumSlateBlue',
					'Orchid',
					'Plum',
					'Purple',
					'SlateBlue',
					'Thistle',
					'Violet',
				],

				// Gray
				Gray: [
					'AliceBlue',
					'AntiqueWhite',
					'Azure',
					'Beige',
					'Black',
					'DarkGray',
					'DarkGrey',
					'DarkSlateGray',
					'DarkSlateGrey',
					'DimGrey',
					'FloralWhite',
					'Gainsboro',
					'GhostWhite',
					'Grey',
					'HoneyDew',
					'Ivory',
					'LavenderBlush',
					'LightGrey',
					'LightSlateGrey',
					'Linen',
					'MintCream',
					'MistyRose',
					'NavajoWhite',
					'OldLace',
					'SeaShell',
					'Silver',
					'SlateGray',
					'SlateGrey',
					'Snow',
					'White',
					'WhiteSmoke',
				]

			}

		}
	}

}
</script>
