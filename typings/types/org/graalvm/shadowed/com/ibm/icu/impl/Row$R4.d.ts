import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Row } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row.d.ts'
import type { Row$R2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R2.d.ts'
import type { Row$R3 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R3.d.ts'
import type { Row$R5 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Row$R5.d.ts'
export class Row$R4<C0 extends Object | number | string | boolean, C1 extends Object | number | string | boolean, C2 extends Object | number | string | boolean, C3 extends Object | number | string | boolean> extends Row<C0, C1, C2, C3, C3> {
    static of(paramp0: Object | null, paramp1: Object | null, paramp2: Object | null, paramp3: Object | null, paramp4: Object | null): Row$R5<Object, Object, Object, Object, Object>;
    static of(paramp0: Object | null, paramp1: Object | null, paramp2: Object | null, paramp3: Object | null): Row$R4<Object, Object, Object, Object>;
    static of(paramp0: Object | null, paramp1: Object | null, paramp2: Object | null): Row$R3<Object, Object, Object>;
    static of(paramp0: Object | null, paramp1: Object | null): Row$R2<Object, Object>;
    constructor(a: C0, b: C1, c: C2, d: C3)
}