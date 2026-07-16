import type { Row$R2 } from '../../../../com/ibm/icu/impl/Row$R2.d.ts'
import type { Row$R3 } from '../../../../com/ibm/icu/impl/Row$R3.d.ts'
import type { Row$R4 } from '../../../../com/ibm/icu/impl/Row$R4.d.ts'
import type { Row$R5 } from '../../../../com/ibm/icu/impl/Row$R5.d.ts'
import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Row<C0 extends unknown, C1 extends unknown, C2 extends unknown, C3 extends unknown, C4 extends unknown> extends Object implements Freezable<Row<C0, C1, C2, C3, C4>>, Cloneable, Comparable<Object> {
    static of<C0 extends unknown, C1 extends unknown, C2 extends unknown, C3 extends unknown, C4 extends unknown>(paramarg0: C0, paramarg1: C1, paramarg2: C2, paramarg3: C3, paramarg4: C4): Row$R5<C0, C1, C2, C3, C4>;
    static of<C0 extends unknown, C1 extends unknown, C2 extends unknown, C3 extends unknown>(paramarg0: C0, paramarg1: C1, paramarg2: C2, paramarg3: C3): Row$R4<C0, C1, C2, C3>;
    static of<C0 extends unknown, C1 extends unknown, C2 extends unknown>(paramarg0: C0, paramarg1: C1, paramarg2: C2): Row$R3<C0, C1, C2>;
    static of<C0 extends unknown, C1 extends unknown>(paramarg0: C0, paramarg1: C1): Row$R2<C0, C1>;
    constructor()
    frozen: boolean;
    // private items: Object[];
    clone(): Row<C0, C1, C2, C3, C4>;
    cloneAsThawed(): Row<C0, C1, C2, C3, C4>;
    compareTo(arg0: Object | null): number;
    equals(arg0: Object | null): boolean;
    freeze(): Row<C0, C1, C2, C3, C4>;
    get0(): C0;
    get1(): C1;
    get2(): C2;
    get3(): C3;
    get4(): C4;
    hashCode(): number;
    isFrozen(): boolean;
    set(arg0: number, arg1: Object): Row<C0, C1, C2, C3, C4>;
    set0(arg0: C0): Row<C0, C1, C2, C3, C4>;
    set1(arg0: C1): Row<C0, C1, C2, C3, C4>;
    set2(arg0: C2): Row<C0, C1, C2, C3, C4>;
    set3(arg0: C3): Row<C0, C1, C2, C3, C4>;
    set4(arg0: C4): Row<C0, C1, C2, C3, C4>;
    toString(): string;
}