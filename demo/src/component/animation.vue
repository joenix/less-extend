<template>

	<div class="pretty">

		<section class="markdown">

			<article>

				<h1>Animation</h1>

			</article>

		</section>

		<section class="markdown">

			<article>

				<blockquote>

<pre>
<code class="lang-less">
/* !!
 * Animation
 * ===== ===== =====
 * Name:      动画名称
 * Duration:  持续时长
 * Function:  过渡特效
 * Delay:     延迟执行
 * Count:     循环次数
 * Direction: 运动方向
 * Fill:      停止状态
 * State:     执行状态
 * ===== ===== =====
 */
.animation( example );

// 动画名称
.animation-name( example );

// 持续时长
.animation-duration( @speed );

/* !!
 * Timing Function
 * ===== ===== =====
 * linear: 线性过渡 => (0.0, 0.0, 1.0, 1.0)
 * ease: 平滑过渡 => (0.25, 0.1, 0.25, 1.0)
 * ease-in: 由慢到快 => (0.42, 0, 1.0, 1.0)
 * ease-out: 由快到慢 => (0, 0, 0.58, 1.0)
 * ease-in-out: 由慢到快再到慢 => (0.42, 0, 0.58, 1.0)
 * step-start: steps(1, start)
 * step-end: steps(1, end)
 * steps: (integer, [ start | end ])
 * cubic-bezier: (number, number, number, number)
 * ===== ===== =====
 */
.animation-function( linear );

// 延迟执行
.animation-delay( @flash );

// 循环次数
.animation-count( infinite );

// 运动方向: Reverse | Alternate | Alternate-Reverse
.animation-direction( normal );

// 停止状态: Forwards | Backwards | Both
.animation-fill( none );

// 执行状态: Running | Paused
.animation-state( running );
</code>
</pre>

				</blockquote>

			</article>

		</section>

	</div>

</template>
