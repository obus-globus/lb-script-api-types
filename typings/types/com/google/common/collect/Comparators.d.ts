import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Comparators extends Object {
    static emptiesFirst(paramvalueComparator: (param0: Object) => boolean): (param0: Object) => boolean;
    static emptiesLast(paramvalueComparator: (param0: Object) => boolean): (param0: Object) => boolean;
    static greatest(paramk: number, paramcomparator: (param0: Object) => boolean): Collector<Object, Object, (Object | null)[]>;
    static isInOrder(paramiterable: (Object | null)[], paramcomparator: (param0: Object) => boolean): boolean;
    static isInStrictOrder(paramiterable: (Object | null)[], paramcomparator: (param0: Object) => boolean): boolean;
    static least(paramk: number, paramcomparator: (param0: Object) => boolean): Collector<Object, Object, (Object | null)[]>;
    static lexicographical(paramcomparator: (param0: Object) => boolean): (param0: Object) => boolean;
    static max(parama: Object | null, paramb: Object | null): Object | null;
    static max(parama: Object | null, paramb: Object | null, paramcomparator: (param0: Object) => boolean): Object | null;
    static min(parama: Object | null, paramb: Object | null): Object | null;
    static min(parama: Object | null, paramb: Object | null, paramcomparator: (param0: Object) => boolean): Object | null;
    private constructor()
}