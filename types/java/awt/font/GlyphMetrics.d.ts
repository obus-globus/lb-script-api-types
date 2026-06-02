import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Rectangle2D$Float } from '../../../java/awt/geom/Rectangle2D$Float.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GlyphMetrics extends Object {
    static COMBINING: number;
    static COMPONENT: number;
    static LIGATURE: number;
    static STANDARD: number;
    static WHITESPACE: number;
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: Rectangle2D, arg4: number)
    constructor(arg0: number, arg1: Rectangle2D, arg2: number)
    readonly advanceX: number;
    readonly advanceY: number;
    // private bounds: Rectangle2D$Float;
    // private glyphType: number;
    // private horizontal: boolean;
    getAdvance(): number;
    getAdvanceX(): number;
    getAdvanceY(): number;
    getBounds2D(): Rectangle2D;
    getLSB(): number;
    getRSB(): number;
    getType(): number;
    isCombining(): boolean;
    isComponent(): boolean;
    isLigature(): boolean;
    isStandard(): boolean;
    isWhitespace(): boolean;
}