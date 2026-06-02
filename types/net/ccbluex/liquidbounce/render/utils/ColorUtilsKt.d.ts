import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ColorUtilsKt extends Object {
    static interpolateHue(paramarg0: Color4b, paramarg1: Color4b, paramarg2: number): Color4b;
    static rainbow(): Color4b;
    static rainbow(paramarg0: number): Color4b;
    static shiftHue(paramarg0: Color4b, paramarg1: number): Color4b;
}