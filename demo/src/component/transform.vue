<template>

	<div class="pretty">

		<section class="markdown">

			<article>

				<h1>Transform ( Alpha )</h1>

			</article>

		</section>

		<section class="markdown">

			<article>

				<h2>2D 变换</h2>

				<blockquote>

<pre>
<code class="lang-less">
// 属性变换
.transform( none );


/* !!
 * Matrix: 矩阵变换
 * ===== ===== =====
 * Arguments: a, b, c, d, e, f
 * ----- ----- -----
 * ╔ a c e ╗   ╔ x ╗   ╔ ax + cy + e ╗
 * ║ b d f ║ * ║ y ║ = ║ bx + dy + f ║
 * ╚ 0 0 1 ╝   ╚ 1 ╝   ╚  0 +  0 + 1 ╝
 * ----- ----- -----
 * x = ax + cy + e;
 * y = bx + dy + f;
 * ===== ===== =====
 */

.matrix( 1, 0, 0, 1, 0, 0 );


// 位移
.translate( -50%, -50% );

// X轴 位移
.translate-x( -50% );

// Y轴 位移
.translate-y( -50% );

// Z轴 位移
.translate-z( 0 );


// 旋转
.rotate( 90deg );

// X轴 旋转
.rotate-x( 120deg );

// Y轴 旋转
.rotate-y( 120deg );

// Z轴 旋转
.rotate-z( 120deg );


// 缩放
.scale( 2, 2 );

// X轴 缩放
.scale-x( 1 );

// Y轴 缩放
.scale-y( 1 );

// Z轴 缩放
.scale-z( 1 );


// 斜切扭曲
.skew( 30deg, 60deg );

// X轴 斜切
.skew-x( 90deg );

// Y轴 斜切
.skew-y( 90deg );
</code>
</pre>

				</blockquote>

			</article>

		</section>

		<section class="markdown">

			<article>

				<h2>3D 变换</h2>

				<blockquote>

<pre>
<code class="lang-less">
/* !!
 * Matrix 3D: 3D 矩阵变换
 * ===== ===== =====
 * Arguments:
 * - a, b, c, x,
 * - d, e, f, y,
 * - g, h, i, z,
 * - j, k, l, 1,
 * ----- ----- -----
 * ╔ a d g j ╗
 * ║ b e h k ║
 * ║ c f i l ║
 * ╚ x y z 1 ╝
 * ===== ===== =====
 */

.matrix3d
(
	1, 0, 0, 0,
	0, 1, 0, 0,
	0, 0, 1, 0,
	0, 0, 0, 1
);


// 3D 位移
.translate3d( 10%, 20%, 30% );

// 3D 旋转
.rotate3d( 1, -1, 0, 60deg );

// 3D 缩放
.scale3d( -1, 1, 0 );


// 透视距离
.perspective( 500 );
</code>
</pre>

				</blockquote>

			</article>

		</section>

	</div>

</template>
