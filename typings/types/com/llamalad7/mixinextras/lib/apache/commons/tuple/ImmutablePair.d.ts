import type { Pair } from '../../../../../../../com/llamalad7/mixinextras/lib/apache/commons/tuple/Pair.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ImmutablePair<L extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Pair<L, R> {
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    constructor(arg0: L, arg1: R)
    readonly left: L;
    readonly right: R;
    getLeft(): L;
    getRight(): R;
    setValue(arg0: R): R;
}