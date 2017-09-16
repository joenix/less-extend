# Less Extend
[![npm version](https://img.shields.io/badge/npm-1.2.9-red.svg)](https://img.shields.io/badge/npm-1.2.9-red.svg)
[![github version](https://img.shields.io/badge/github-1.2.9-blue.svg)](https://img.shields.io/badge/github-1.2.9-blue.svg)

` Less Extend ` is A Less Extention For Faster Efficient Develop.




## Quick Start


#### How to use ?


```console
npm install --save-dev less-extend
```


#### If Failed ~

```console
npm install --save-dev less-loader less
```


#### Import into Less File !

```css
@import '~less-extend/index.less';
```




## Package Index


#### TKS 4 Normalize
- [Github.Normalize](https://github.com/necolas/normalize.css)


#### CSS Reset
- A Package Reset CSS


#### Color
- 147 Css Colors


#### Constant
- Build In Constant


#### Variables
- Build In Variable


#### Combine
- Combination CSS


#### Kit
- Less Kit


#### Grid
- A Grid System: Free Fence 1 ~ 12


#### Init
- Initialization Global Style




## Features


### * in Constant Package

> 1. @percent-0 ~ @percent-100
> 2. @weight-100 ~ @weight-900


### * in Variable Package

#### Font
> 1. @font-serif: 'Times New Roman', 'Georgia', '宋体', 'serif'
> 2. @font-sans: 'Tahoma', 'Verdana', 'Arial', 'Microsoft Yahei', 'sans serif'
> 3. @font-super: Helvetica, Tahoma, Arial, Verdana, Georgia, Sans-Serif, Serif
> 4. More in Future ...

#### Color
> 1. @color-bg: #fff
> 2. @color-reverse: #444
> 3. @color-font: #333
> 4. @color-line: #333
> 5. More in Future ...


### * in Combine Package ( Class Name )


#### Font
- size
- large
- small
- family
- normal
- bold
- italic
- oblique

#### Size: Width + Height
- width
- width-percent
- width-min
- width-max
- width-min-percent
- width-max-percent
- height
- height-percent
- height-min
- height-max
- height-min-percent
- height-max-percent
- line-height

#### Size: Margin + Padding
- margin
- margin-top
- margin-left
- margin-right
- margin-bottom
- padding
- padding-top
- padding-left
- padding-right
- padding-bottom
- fit: Same Value Set Margin + Padding
- fit-center: Make Node Centered
- center: Center Display

#### Azimuth
- top
- top-percent
- left
- left-percent
- right
- right-percent
- bottom
- bottom-percent

#### Background
- background
- background-image
- background-color
- background-rgba
- rgba
- background-repeat
- background-position
- background-size

#### Color
- color
- rgb: Red, Green, Blue

#### Border
- border
- border-none
- border-top
- border-left
- border-right
- border-bottom
- border-width
- border-style
- border-color

#### Display
- display
- none
- block
- inline
- inline-block
- table
- table-cell
- table-col
- table-row

#### Position
- position
- absolute
- relative
- fixed
- static
- sticky

#### Z Index
- z-index
- z
- z-max

#### Float
- float
- float-left
- float-right
- float-none

#### Clear
- clear
- clear-left
- clear-right
- clear-both
- clear-none

#### List Style
- list-style
- list-disc
- list-circle
- list-square
- list-decimal
- list-zero
- list-roman-lower
- list-roman-upper
- list-alpha-lower
- list-alpha-upper
- list-latin-lower
- list-latin-upper
- list-greek
- list-hebrew
- list-armenian
- list-georgian
- list-cjk
- list-hiragana
- list-katakana
- list-hiragana-iroha
- list-katakana-iroha

#### Over Flow
- overflow
- over-hide
- over-show
- over-auto
- over-scroll

#### Scroll
- scroll
- scroll-x
- scroll-y

#### Text Align
- text
- text-left
- text-right
- text-center
- start
- end
- justify

#### Text Vertical
- vertical
- v-top
- v-bottom
- v-middle
- v-base
- v-text

#### Text Indent
- first
- indent

#### Text Letter Space
- letter

#### Text Break
- text-keep
- text-break

#### Text Over
- text-over

#### Text Ellipsis
- ellipsis

#### Text Decoration
- decoration
- line-over
- line-under
- line-through
- line-blink

#### Opacity
- opacity
- o-show
- o-hide

#### Radius
- radius

#### Rotate
- rotate

#### Origin
- origin: x, y, z

#### Shadow
- shadow: x, y, length, color
- no-shadow
- text-shadow: x, y, length, color

#### Content
- content

#### Select
- auto-select
- no-select

#### Cursor ( Hand )
- cursor
- hand
- move
- wait
- help
- crosshair
- hand-top
- hand-left
- hand-right
- hand-bottom
- hand-top-left or hand-left-top
- hand-top-right or hand-right-top
- hand-bottom-left or hand-left-bottom
- hand-bottom-right or hand-right-bottom

#### Transform
- transform: x, y
- affix
- affix-top
- affix-left
- affix-right
- affix-bottom
- affix-in


### * in Kit Package ( Class Name )


#### Console
- console: color

#### Clearfix
- clearfix: Set on Parent Node

#### Display
- show
- hide

#### List Inline
- list-inline

#### Screen
- screen-max: Full Screen
- screen-center: Center in Screen

#### Central
- central: Center in Parent Node
- mediate: Set on <img /> 's Parent Node

#### Scroll Bar
- scrollbar: color
- scrollbar-x: space, color
- scrollbar-y: space, color

#### Form Control
```console
ul.form
=> li
  => label
  => div
```
- form-control: distance

#### Screen Fix
- screen: Default Mode is Fixed
- screen-top
- screen-left
- screen-right
- screen-bottom

#### Fruit Layout
```console
div.fruit-left or div.fruit-right
=> div.fruit-head
=> div.fruit-body
```
- fruit-left: space, crevice
- fruit-right: space, crevice

#### Caret Arrow
- caret: Default Direction is Bottom
- caret-top
- caret-left
- caret-right
- caret-bottom

#### Drop
```console
dl.drop
=> dt
=> dd
```
- drop-up
- drop-down
- drop-left
- drop-right

#### Easy Transition
- effect: speed, type, mode
- animate: speed, type

#### Animation For Keyframe
- animation: name, duration, timing, delay, count, direction
- animation-name: none
- animation-duration: 0
- animation-timing: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier (x1, y1, x2, y2)
- animation-delay: 0
- animation-count: infinite | number
- animation-direction: normal | alternate
- animation-state: running | paused

#### Gradient
- linear-gradient: begin, end, direct
- repeat-linear: begin, end, direct
- radial-gradient: begin, end, shape, position

#### Reflect: above | below | left | right
- reflect: dir, offset, mode

#### Price
- price: Default Symbol is '￥' ( RMB )




## Appendix


### in Color Package

#### Pink
- <font color=DeepPink>■</font> => DeepPink
- <font color=HotPink>■</font> => HotPink
- <font color=LightPink>■</font> => LightPink
- <font color=MediumVioletRed>■</font> => MediumVioletRed
- <font color=PaleVioletRed>■</font> => PaleVioletRed
- <font color=Pink>■</font> => Pink

#### Red
- <font color=Crimson>■</font> => Crimson
- <font color=DarkRed>■</font> => DarkRed
- <font color=DarkSalmon>■</font> => DarkSalmon
- <font color=FireBrick>■</font> => FireBrick
- <font color=IndianRed>■</font> => IndianRed
- <font color=LightCoral>■</font> => LightCoral
- <font color=LightSalmon>■</font> => LightSalmon
- <font color=Red>■</font> => Red
- <font color=Salmon>■</font> => Salmon

#### Orange
- <font color=Coral>■</font> => Coral
- <font color=DarkOrange>■</font> => DarkOrange
- <font color=Gold>■</font> => Gold
- <font color=Orange>■</font> => Orange
- <font color=OrangeRed>■</font> => OrangeRed
- <font color=Tomato>■</font> => Tomato

#### Yellow
- <font color=DarkKhaki>■</font> => DarkKhaki
- <font color=Khaki>■</font> => Khaki
- <font color=LemonChiffon>■</font> => LemonChiffon
- <font color=LightGoldenRodYellow>■</font> => LightGoldenRodYellow
- <font color=LightYellow>■</font> => LightYellow
- <font color=Moccasin>■</font> => Moccasin
- <font color=PaleGoldenRod>■</font> => PaleGoldenRod
- <font color=PapayaWhip>■</font> => PapayaWhip
- <font color=PeachPuff>■</font> => PeachPuff
- <font color=Yellow>■</font> => Yellow

#### Brown
- <font color=Bisque>■</font> => Bisque
- <font color=BlanchedAlmond>■</font> => BlanchedAlmond
- <font color=Brown>■</font> => Brown
- <font color=BurlyWood>■</font> => BurlyWood
- <font color=Chocolate>■</font> => Chocolate
- <font color=Cornsilk>■</font> => Cornsilk
- <font color=DarkGoldenRod>■</font> => DarkGoldenRod
- <font color=Goldenrod>■</font> => Goldenrod
- <font color=Maroon>■</font> => Maroon
- <font color=Peru>■</font> => Peru
- <font color=RosyBrown>■</font> => RosyBrown
- <font color=SaddleBrown>■</font> => SaddleBrown
- <font color=SandyBrown>■</font> => SandyBrown
- <font color=Sienna>■</font> => Sienna
- <font color=Tan>■</font> => Tan
- <font color=Wheat>■</font> => Wheat

#### Green
- <font color=Chartreuse>■</font> => Chartreuse
- <font color=DarkGreen>■</font> => DarkGreen
- <font color=DarkOliveGreen>■</font> => DarkOliveGreen
- <font color=DarkSeaGreen>■</font> => DarkSeaGreen
- <font color=ForestGreen>■</font> => ForestGreen
- <font color=Green>■</font> => Green
- <font color=GreenYellow>■</font> => GreenYellow
- <font color=LawnGreen>■</font> => LawnGreen
- <font color=LightGreen>■</font> => LightGreen
- <font color=Lime>■</font> => Lime
- <font color=LimeGreen>■</font> => LimeGreen
- <font color=MediumSeaGreen>■</font> => MediumSeaGreen
- <font color=MediumSpringGreen>■</font> => MediumSpringGreen
- <font color=Olive>■</font> => Olive
- <font color=OliveDrab>■</font> => OliveDrab
- <font color=PaleGreen>■</font> => PaleGreen
- <font color=SeaGreen>■</font> => SeaGreen
- <font color=SpringGreen>■</font> => SpringGreen
- <font color=YellowGreen>■</font> => YellowGreen

#### Cyan
- <font color=CadetBlue>■</font> => CadetBlue
- <font color=Cyan>■</font> => Cyan
- <font color=DarkCyan>■</font> => DarkCyan
- <font color=LightCyan>■</font> => LightCyan
- <font color=Teal>■</font> => Teal

#### Blue
- <font color=Blue>■</font> => Blue
- <font color=BlueViolet>■</font> => BlueViolet
- <font color=CornflowerBlue>■</font> => CornflowerBlue
- <font color=DarkBlue>■</font> => DarkBlue
- <font color=DeepSkyBlue>■</font> => DeepSkyBlue
- <font color=DodgerBlue>■</font> => DodgerBlue
- <font color=LightBlue>■</font> => LightBlue
- <font color=LightSkyBlue>■</font> => LightSkyBlue
- <font color=LightSteelBlue>■</font> => LightSteelBlue
- <font color=MediumBlue>■</font> => MediumBlue
- <font color=MidnightBlue>■</font> => MidnightBlue
- <font color=Navy>■</font> => Navy
- <font color=PowderBlue>■</font> => PowderBlue
- <font color=RoyalBlue>■</font> => RoyalBlue
- <font color=SkyBlue>■</font> => SkyBlue
- <font color=SteelBlue>■</font> => SteelBlue

#### Purple
- <font color=DarkMagenta>■</font> => DarkMagenta
- <font color=DarkOrchid>■</font> => DarkOrchid
- <font color=DarkSlateBlue>■</font> => DarkSlateBlue
- <font color=DarkViolet>■</font> => DarkViolet
- <font color=Fuchsia>■</font> => Fuchsia
- <font color=Indigo>■</font> => Indigo
- <font color=Lavender>■</font> => Lavender
- <font color=Magenta>■</font> => Magenta
- <font color=MediumOrchid>■</font> => MediumOrchid
- <font color=MediumPurple>■</font> => MediumPurple
- <font color=MediumSlateBlue>■</font> => MediumSlateBlue
- <font color=Orchid>■</font> => Orchid
- <font color=Plum>■</font> => Plum
- <font color=Purple>■</font> => Purple
- <font color=SlateBlue>■</font> => SlateBlue
- <font color=Thistle>■</font> => Thistle
- <font color=Violet>■</font> => Violet

#### Gray
- <font color=AliceBlue>■</font> => AliceBlue
- <font color=AntiqueWhite>■</font> => AntiqueWhite
- <font color=Azure>■</font> => Azure
- <font color=Beige>■</font> => Beige
- <font color=Black>■</font> => Black
- <font color=DarkGray>■</font> => DarkGray
- <font color=DarkGrey>■</font> => DarkGrey
- <font color=DarkSlateGray>■</font> => DarkSlateGray
- <font color=DarkSlateGrey>■</font> => DarkSlateGrey
- <font color=DimGrey>■</font> => DimGrey
- <font color=FloralWhite>■</font> => FloralWhite
- <font color=Gainsboro>■</font> => Gainsboro
- <font color=GhostWhite>■</font> => GhostWhite
- <font color=Grey>■</font> => Grey
- <font color=HoneyDew>■</font> => HoneyDew
- <font color=Ivory>■</font> => Ivory
- <font color=LavenderBlush>■</font> => LavenderBlush
- <font color=LightGrey>■</font> => LightGrey
- <font color=LightSlateGrey>■</font> => LightSlateGrey
- <font color=Linen>■</font> => Linen
- <font color=MintCream>■</font> => MintCream
- <font color=MistyRose>■</font> => MistyRose
- <font color=NavajoWhite>■</font> => NavajoWhite
- <font color=OldLace>■</font> => OldLace
- <font color=SeaShell>■</font> => SeaShell
- <font color=Silver>■</font> => Silver
- <font color=SlateGray>■</font> => SlateGray
- <font color=SlateGrey>■</font> => SlateGrey
- <font color=Snow>■</font> => Snow
- <font color=White>■</font> => White
- <font color=WhiteSmoke>■</font> => WhiteSmoke
