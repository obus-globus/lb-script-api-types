import type { Pair } from '../../../../../../../com/llamalad7/mixinextras/lib/apache/commons/tuple/Pair.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ImmutablePair<L extends unknown, R extends unknown> extends Pair<L, R> {
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    constructor(arg0: L, arg1: R)
    readonly left: L;
    readonly right: R;
    getLeft(): L;
    getRight(): R;
    setValue(arg0: R): R;
}