import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class StrikeMetrics extends Object {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number)
    ascentX: number;
    ascentY: number;
    baselineX: number;
    baselineY: number;
    descentX: number;
    descentY: number;
    leadingX: number;
    leadingY: number;
    maxAdvanceX: number;
    maxAdvanceY: number;
    convertToUserSpace(arg0: AffineTransform): void;
    getAscent(): number;
    getDescent(): number;
    getLeading(): number;
    getMaxAdvance(): number;
    merge(arg0: StrikeMetrics): void;
    toString(): string;
}