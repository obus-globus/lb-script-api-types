import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ColorUtilsKt extends Object {
    static interpolateHue(primaryColor: Color4b, otherColor: Color4b, percentageOther: number): Color4b;
    static rainbow(): Color4b;
    static rainbow(alpha: number): Color4b;
    static shiftHue(color4b: Color4b, shift: number): Color4b;
}