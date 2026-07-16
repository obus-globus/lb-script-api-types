import type { Row } from '../../../../com/ibm/icu/impl/Row.d.ts'
import type { Row$R3 } from '../../../../com/ibm/icu/impl/Row$R3.d.ts'
import type { Row$R4 } from '../../../../com/ibm/icu/impl/Row$R4.d.ts'
import type { Row$R5 } from '../../../../com/ibm/icu/impl/Row$R5.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Row$R2<C0 extends unknown, C1 extends unknown> extends Row<C0, C1, C1, C1, C1> {
    static of<C0 extends unknown, C1 extends unknown, C2 extends unknown, C3 extends unknown, C4 extends unknown>(paramarg0: C0, paramarg1: C1, paramarg2: C2, paramarg3: C3, paramarg4: C4): Row$R5<C0, C1, C2, C3, C4>;
    static of<C0 extends unknown, C1 extends unknown, C2 extends unknown, C3 extends unknown>(paramarg0: C0, paramarg1: C1, paramarg2: C2, paramarg3: C3): Row$R4<C0, C1, C2, C3>;
    static of<C0 extends unknown, C1 extends unknown, C2 extends unknown>(paramarg0: C0, paramarg1: C1, paramarg2: C2): Row$R3<C0, C1, C2>;
    static of<C0 extends unknown, C1 extends unknown>(paramarg0: C0, paramarg1: C1): Row$R2<C0, C1>;
    constructor(arg0: C0, arg1: C1)
}