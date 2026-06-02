import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { Triple } from '../kotlin/Triple.d.ts'
export class TuplesKt extends Object {
    static to(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    static toList(paramarg0: Pair<Object, Object>): (Object | null)[];
    static toList(paramarg0: Triple<Object, Object, Object>): (Object | null)[];
}