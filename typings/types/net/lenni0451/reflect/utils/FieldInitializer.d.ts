import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { FieldInitializer$ThrowingFunction } from '../../../../net/lenni0451/reflect/utils/FieldInitializer$ThrowingFunction.d.ts'
import type { FieldInitializer$ThrowingSupplier } from '../../../../net/lenni0451/reflect/utils/FieldInitializer$ThrowingSupplier.d.ts'
export class FieldInitializer extends Object {
    static condInit(paramarg0: boolean, paramarg1: () => Object | null, paramarg2: (param0: Object | null) => Object | null): Object | null;
    static condInit(paramarg0: boolean, paramarg1: () => Object | null): Object | null;
    static condReqInit(paramarg0: () => Object | null, paramarg1: (param0: Object | null) => Object | null, paramarg2: () => Throwable): Object | null;
    static init(paramarg0: () => Object | null, paramarg1: (param0: Object | null) => Object | null): Object | null;
    static init(paramarg0: Object | null, paramarg1: (param0: Object | null) => void): Object | null;
    static init(paramarg0: () => Object | null): Object | null;
    static optInit(paramarg0: () => Object | null, paramarg1: (param0: Object | null) => Object | null): Object | null;
    static optInit(paramarg0: () => Object | null): Object | null;
    static process(paramarg0: () => Object | null, paramarg1: (param0: Throwable) => Throwable): Object | null;
    static reqInit(paramarg0: () => Object | null, paramarg1: (param0: Object | null) => Object | null, paramarg2: () => Throwable): Object | null;
    static reqInit(paramarg0: () => Object | null, paramarg1: () => Throwable): Object | null;
    static reqOptInit(paramarg0: boolean, paramarg1: () => Object | null, paramarg2: (param0: Object | null) => Object | null, paramarg3: () => Throwable): Object | null;
    static reqOptInit(paramarg0: boolean, paramarg1: () => Object | null, paramarg2: () => Throwable): Object | null;
    constructor()
}