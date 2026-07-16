import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Row } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row.d.ts'
import type { Row$R3 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R3.d.ts'
import type { Row$R4 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R4.d.ts'
import type { Row$R5 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R5.d.ts'
export class Row$R2<C0 extends unknown, C1 extends unknown> extends Row<C0, C1, C1, C1, C1> {
    static of<C0 extends unknown, C1 extends unknown, C2 extends unknown, C3 extends unknown, C4 extends unknown>(paramp0: C0, paramp1: C1, paramp2: C2, paramp3: C3, paramp4: C4): Row$R5<C0, C1, C2, C3, C4>;
    static of<C0 extends unknown, C1 extends unknown, C2 extends unknown, C3 extends unknown>(paramp0: C0, paramp1: C1, paramp2: C2, paramp3: C3): Row$R4<C0, C1, C2, C3>;
    static of<C0 extends unknown, C1 extends unknown, C2 extends unknown>(paramp0: C0, paramp1: C1, paramp2: C2): Row$R3<C0, C1, C2>;
    static of<C0 extends unknown, C1 extends unknown>(paramp0: C0, paramp1: C1): Row$R2<C0, C1>;
    constructor(a: C0, b: C1)
}