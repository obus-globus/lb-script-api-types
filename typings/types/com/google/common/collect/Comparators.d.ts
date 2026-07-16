import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Comparators extends Object {
    static emptiesFirst(paramvalueComparator: (param0: Object, param1: Object) => number): (param0: Optional<Object>, param1: Optional<Object>) => number;
    static emptiesLast(paramvalueComparator: (param0: Object, param1: Object) => number): (param0: Optional<Object>, param1: Optional<Object>) => number;
    static greatest(paramk: number, paramcomparator: (param0: Object, param1: Object) => number): Collector<Object, Object, (Object | null)[]>;
    static isInOrder(paramiterable: (Object | null)[], paramcomparator: (param0: Object | null, param1: Object | null) => number): boolean;
    static isInStrictOrder(paramiterable: (Object | null)[], paramcomparator: (param0: Object | null, param1: Object | null) => number): boolean;
    static least(paramk: number, paramcomparator: (param0: Object, param1: Object) => number): Collector<Object, Object, (Object | null)[]>;
    static lexicographical(paramcomparator: (param0: Object | null, param1: Object | null) => number): (param0: (Object | null)[], param1: (Object | null)[]) => number;
    static max(parama: Object | null, paramb: Object | null): Object | null;
    static max(parama: Object | null, paramb: Object | null, paramcomparator: (param0: Object, param1: Object) => number): Object | null;
    static min(parama: Object | null, paramb: Object | null): Object | null;
    static min(parama: Object | null, paramb: Object | null, paramcomparator: (param0: Object, param1: Object) => number): Object | null;
    private constructor()
}