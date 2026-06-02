import type { Shape } from '../../java/awt/Shape.d.ts'
import type { Stroke } from '../../java/awt/Stroke.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class BasicStroke extends Object implements Stroke {
    static CAP_BUTT: number;
    static CAP_ROUND: number;
    static CAP_SQUARE: number;
    static JOIN_BEVEL: number;
    static JOIN_MITER: number;
    static JOIN_ROUND: number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number)
    // private cap: number;
    // private dash: number[];
    // private dash_phase: number;
    // private join: number;
    // private miterlimit: number;
    // private width: number;
    createStrokedShape(arg0: Shape): Shape;
    equals(arg0: Object | null): boolean;
    getDashArray(): number[];
    getDashPhase(): number;
    getEndCap(): number;
    getLineJoin(): number;
    getLineWidth(): number;
    getMiterLimit(): number;
    hashCode(): number;
}