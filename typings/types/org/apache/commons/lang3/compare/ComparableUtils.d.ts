import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { ComparableUtils$ComparableCheckBuilder } from '../../../../../org/apache/commons/lang3/compare/ComparableUtils$ComparableCheckBuilder.d.ts'
export class ComparableUtils extends Object {
    static between<A extends Comparable<A>>(paramarg0: A, paramarg1: A): (param0: A) => boolean;
    static betweenExclusive<A extends Comparable<A>>(paramarg0: A, paramarg1: A): (param0: A) => boolean;
    static ge<A extends Comparable<A>>(paramarg0: A): (param0: A) => boolean;
    static gt<A extends Comparable<A>>(paramarg0: A): (param0: A) => boolean;
    static is<A extends Comparable<A>>(paramarg0: A): ComparableUtils$ComparableCheckBuilder<A>;
    static le<A extends Comparable<A>>(paramarg0: A): (param0: A) => boolean;
    static lt<A extends Comparable<A>>(paramarg0: A): (param0: A) => boolean;
    static max<A extends Comparable<A>>(paramarg0: A, paramarg1: A): A;
    static min<A extends Comparable<A>>(paramarg0: A, paramarg1: A): A;
    private constructor()
}