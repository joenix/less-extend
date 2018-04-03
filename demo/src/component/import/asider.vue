<template>

	<aside>

		<nav>

			<dl v-for="list, top in list" :keys="top">

				<dt><router-link class="upper" :to="{ name: top }">{{ top == 'index' ? 'GETTING STARTED' : top }} - {{ pro[ top ] }}</router-link></dt>

				<dd>

					<ul>

						<li v-for="chinese, english in list" :key="english">

							<router-link class="capitalize" :class="{ active: $route.name === english }" :to="{ name: english }">{{ english }} - {{ chinese }}</router-link>

						</li>

					</ul>

				</dd>

			</dl>

		</nav>

	</aside>

</template>

<script>
export default {
	data ()
	{
		return {

			pro: {
				index: '开始',
				preset: '预设',
				resetting: '重置',
				extend: '拓展',
				kit: '工具',
				plugin: '插件'
			},

			list: {
				index: {
					description: '简介',
					install: '安装',
					start: '使用'
				},
				// PRESET
				preset: {
					safe: '内置配色',
					colour: '颜色',
					size: '尺寸',
					unit: '空间',
					speed: '速度',
					family: '字体'
				},
				// RESET
				resetting: {
					reset: '重置',
					gorgeous: '美化'
				},
				// EXTEND
				extend: {
					dimension: '尺寸',
					font: '字体',
					text: '文本',
					column: '段落排列',
					link: '超链接',
					color: '颜色',
					border: '边框',
					background: '背景',
					opacity: '透明度',
					radius: '圆角',
					shadow: '阴影',
					list: '列表',
					content: '内容',
					float: '浮动',
					position: '定位',
					display: '显示',
					clip: '剪裁',
					flex: '弹性布局',
					table: '表格',
					resize: '拉伸',
					cursor: '手型',
					transition: '过渡',
					transform: '变换',
					animation: '动画',
					print: '打印'
				},
				// KIT
				kit: {
					pre: '前缀',
					key: '关键帧',
					grid: '栅格',
					tink: '配色器',
					// responsive: '响应式',
					// caret: '箭头',
					// drop: '下拉',
					chess: '干杯 (彩蛋)'
				},
				// PLUGIN
				plugin: {
					markdown: 'Markdown'
				}
			}

		}
	}
}
</script>
