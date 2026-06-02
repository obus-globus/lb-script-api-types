import type { Row } from '../../../../com/ibm/icu/impl/Row.d.ts'
import type { Row$R2 } from '../../../../com/ibm/icu/impl/Row$R2.d.ts'
import type { Row$R4 } from '../../../../com/ibm/icu/impl/Row$R4.d.ts'
import type { Row$R5 } from '../../../../com/ibm/icu/impl/Row$R5.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Row$R3<C0 extends Object | number | string | boolean, C1 extends Object | number | string | boolean, C2 extends Object | number | string | boolean> extends Row<C0, C1, C2, C2, C2> {
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null, paramarg3: Object | null, paramarg4: Object | null): Row$R5<Object, Object, Object, Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null, paramarg3: Object | null): Row$R4<Object, Object, Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Row$R3<Object, Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): Row$R2<Object, Object>;
    constructor(arg0: C0, arg1: C1, arg2: C2)
}