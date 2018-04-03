<template>

	<div class="pretty">

		<section class="markdown">

			<article>

				<h1>Background</h1>

			</article>

		</section>

		<section class="markdown">

			<article>

				<blockquote>

<pre>
<code class="lang-less">
// 背景
.background( red );


// 背景色
.background-color( red );

// 背景色提亮
.background-lighten( red, 10% );

// 背景色加深
.background-darken( red, 10% );


// 背景图: ( Webpack 编译路径 BUG )
.background-image( example.jpg );

// 背景重复性
.background-repeat( no-repeat );

// 背景定位
.background-position( center );


// 背景固定模式
.background-attachment( scroll );

// 背景固定模式 - 定位固定
.background-fixed;

// 背景固定模式 - 滚动跟随
.background-scroll;

// 背景固定模式 - 内容固定
.background-local;


// 背景图显示模式
.background-origin( padding-box );

// 背景图显示模式 - 含内边距
.background-origin-padding;

// 背景图显示模式 - 含边框线
.background-origin-border;

// 背景图显示模式 - 内容区域
.background-origin-content;


// 背景图剪裁
.background-clip( border-box );

// 背景图剪裁 - 含内边距
.background-clip-padding;

// 背景图剪裁 - 含边框线
.background-clip-border;

// 背景图剪裁 - 内容区域
.background-clip-content;

// 背景图剪裁 - 前景内容（如 文本）
.background-clip-text;


// 背景图尺寸
.background-size( auto );

// 背景图填满容器
.background-cover;

// 背景图完整显示
.background-contain;
</code>
</pre>

				</blockquote>

			</article>

		</section>

	</div>

</template>
