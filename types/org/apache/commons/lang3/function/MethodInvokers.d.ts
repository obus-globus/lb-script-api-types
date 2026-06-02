import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FailableBiConsumer } from '../../../../../org/apache/commons/lang3/function/FailableBiConsumer.d.ts'
import type { FailableBiFunction } from '../../../../../org/apache/commons/lang3/function/FailableBiFunction.d.ts'
import type { FailableFunction } from '../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class MethodInvokers extends Object {
    static asBiConsumer(paramarg0: Method): (param0: Object | null, param1: Object | null) => void;
    static asBiFunction(paramarg0: Method): (param0: Object | null, param1: Object | null) => Object | null;
    static asFailableBiConsumer(paramarg0: Method): (param0: Object | null, param1: Object | null) => void;
    static asFailableBiFunction(paramarg0: Method): (param0: Object | null, param1: Object | null) => Throwable;
    static asFailableFunction(paramarg0: Method): (param0: Object | null) => Throwable;
    static asFailableSupplier(paramarg0: Method): () => Throwable;
    static asFunction(paramarg0: Method): (param0: Object | null) => Object | null;
    static asInterfaceInstance(paramarg0: Class<Object>, paramarg1: Method): Object | null;
    static asSupplier(paramarg0: Method): () => Object | null;
    private constructor()
}