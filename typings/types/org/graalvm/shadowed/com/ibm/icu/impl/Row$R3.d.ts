import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Row } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row.d.ts'
import type { Row$R2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R2.d.ts'
import type { Row$R4 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R4.d.ts'
import type { Row$R5 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R5.d.ts'
export class Row$R3<C0 extends unknown, C1 extends unknown, C2 extends unknown> extends Row<C0, C1, C2, C2, C2> {
    static of(paramp0: Object | null, paramp1: Object | null, paramp2: Object | null, paramp3: Object | null, paramp4: Object | null): Row$R5<Object, Object, Object, Object, Object>;
    static of(paramp0: Object | null, paramp1: Object | null, paramp2: Object | null, paramp3: Object | null): Row$R4<Object, Object, Object, Object>;
    static of(paramp0: Object | null, paramp1: Object | null, paramp2: Object | null): Row$R3<Object, Object, Object>;
    static of(paramp0: Object | null, paramp1: Object | null): Row$R2<Object, Object>;
    constructor(a: C0, b: C1, c: C2)
}