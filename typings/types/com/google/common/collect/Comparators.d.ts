import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Comparators extends Object {
    static emptiesFirst(paramvalueComparator: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static emptiesLast(paramvalueComparator: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static greatest(paramk: number, paramcomparator: (param0: Object | null) => kotlin.Boolean): Collector<Object, Object, Object>;
    static isInOrder(paramiterable: (Object | null)[], paramcomparator: (param0: Object | null) => kotlin.Boolean): boolean;
    static isInStrictOrder(paramiterable: (Object | null)[], paramcomparator: (param0: Object | null) => kotlin.Boolean): boolean;
    static least(paramk: number, paramcomparator: (param0: Object | null) => kotlin.Boolean): Collector<Object, Object, Object>;
    static lexicographical(paramcomparator: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static max(parama: Object | null, paramb: Object | null): Object | null;
    static max(parama: Object | null, paramb: Object | null, paramcomparator: (param0: Object | null) => kotlin.Boolean): Object | null;
    static min(parama: Object | null, paramb: Object | null): Object | null;
    static min(parama: Object | null, paramb: Object | null, paramcomparator: (param0: Object | null) => kotlin.Boolean): Object | null;
    private constructor()
}