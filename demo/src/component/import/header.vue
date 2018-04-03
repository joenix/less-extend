<template>

	<header>
		<h1>
			<bdo class="white">{LESS}</bdo>
			<bdo class="deep">E</bdo><bdo class="blue">X</bdo><bdo class="green">T</bdo><bdo class="orange">E</bdo><bdo class="red">N</bdo><bdo class="russetish">D</bdo>
		</h1>
		<span>{{ version }}</span>
	</header>

</template>

<script>
import {version} from '../../../../package.json';

export default {

	data ()
	{
		return {

			version: version

		}
	}

}
</script>
