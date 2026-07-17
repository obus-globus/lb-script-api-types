import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class Color4b$Companion extends Object {
    BLACK: Color4b;
    BLUE: Color4b;
    CYAN: Color4b;
    DARK_GRAY: Color4b;
    DEFAULT_BG_COLOR: Color4b;
    GRAY: Color4b;
    GREEN: Color4b;
    LIGHT_GRAY: Color4b;
    LIQUID_BOUNCE: Color4b;
    MAGENTA: Color4b;
    ORANGE: Color4b;
    PINK: Color4b;
    PURPLE: Color4b;
    RED: Color4b;
    TRANSPARENT: Color4b;
    WHITE: Color4b;
    YELLOW: Color4b;
    fromHex(hex: string): Color4b;
    fullAlpha(rgb: number): Color4b;
    ofHSB(hue: number, saturation: number, brightness: number, alpha?: number): Color4b;
}