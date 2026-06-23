import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Row$R2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R2.d.ts'
import type { Row$R3 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R3.d.ts'
import type { Row$R4 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R4.d.ts'
import type { Row$R5 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R5.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
export class Row<C0 extends unknown, C1 extends unknown, C2 extends unknown, C3 extends unknown, C4 extends unknown> extends Object implements Cloneable, Comparable<Object>, Freezable<Row<C0, C1, C2, C3, C4>> {
    static of(paramp0: Object | null, paramp1: Object | null, paramp2: Object | null, paramp3: Object | null, paramp4: Object | null): Row$R5<Object, Object, Object, Object, Object>;
    static of(paramp0: Object | null, paramp1: Object | null, paramp2: Object | null, paramp3: Object | null): Row$R4<Object, Object, Object, Object>;
    static of(paramp0: Object | null, paramp1: Object | null, paramp2: Object | null): Row$R3<Object, Object, Object>;
    static of(paramp0: Object | null, paramp1: Object | null): Row$R2<Object, Object>;
    constructor()
    frozen: boolean;
    // private items: Object[];
    protected clone(): Object;
    clone(): Object;
    cloneAsThawed(): Row<C0, C1, C2, C3, C4>;
    compareTo(other: Object | null): number;
    equals(other: Object | null): boolean;
    freeze(): Row<C0, C1, C2, C3, C4>;
    get0(): C0;
    get1(): C1;
    get2(): C2;
    get3(): C3;
    get4(): C4;
    hashCode(): number;
    isFrozen(): boolean;
    set(i: number, item: Object): Row<C0, C1, C2, C3, C4>;
    set0(item: C0): Row<C0, C1, C2, C3, C4>;
    set1(item: C1): Row<C0, C1, C2, C3, C4>;
    set2(item: C2): Row<C0, C1, C2, C3, C4>;
    set3(item: C3): Row<C0, C1, C2, C3, C4>;
    set4(item: C4): Row<C0, C1, C2, C3, C4>;
    toString(): string;
}