import type { RoundingMode } from '../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export abstract class ToDoubleRounder<X extends Number & Comparable<X>> extends Object {
    constructor()
    minus(a: X, b: X): X;
    roundToDouble(x: X, mode: RoundingMode): number;
    roundToDoubleArbitrarily(x: X): number;
    sign(x: X): number;
    toX(d: number, mode: RoundingMode): X;
}