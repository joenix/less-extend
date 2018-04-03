<template>

	<div class="pretty">

		<section class="markdown">

			<article>

				<h1>Transition</h1>

			</article>

		</section>

		<section class="markdown">

			<article>

				<blockquote>

<pre>
<code class="lang-less">
/* !!
 * Transition: 属性过渡
 * ===== ===== =====
 * Property: 属性名称
 * Duration: 动画时长
 * Function: 过渡特效
 * Delay:    延迟执行
 * ===== ===== =====
 */

.transition( none );


// 过渡属性
.transition-property( all );

// 过渡时长
.transition-duration( @speed );


/* !!
 * Timing Function: 过渡模式
 * ===== ===== =====
 * linear: 线性过渡 => (0.0, 0.0, 1.0, 1.0)
 * ease: 平滑过渡 => (0.25, 0.1, 0.25, 1.0)
 * ease-in: 由慢到快 => (0.42, 0, 1.0, 1.0)
 * ease-out: 由快到慢 => (0, 0, 0.58, 1.0)
 * ease-in-out: 由慢到快再到慢 => (0.42, 0, 0.58, 1.0)
 * step-start: steps(1, start)
 * step-end: steps(1, end)
 * steps: ( integer, [ start | end ])
 * cubic-bezier: ( number, number, number, number)
 * ===== ===== =====
 */

.transition-function( linear );


// 延迟执行
.transition-delay( @flash );


// 快捷方式
.effect( all, @speed, linear, @flash );
</code>
</pre>

				</blockquote>

			</article>

		</section>

	</div>

</template>
