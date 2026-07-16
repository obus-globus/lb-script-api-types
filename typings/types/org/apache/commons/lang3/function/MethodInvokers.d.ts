import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FailableBiConsumer } from '../../../../../org/apache/commons/lang3/function/FailableBiConsumer.d.ts'
import type { FailableBiFunction } from '../../../../../org/apache/commons/lang3/function/FailableBiFunction.d.ts'
import type { FailableFunction } from '../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class MethodInvokers extends Object {
    static asBiConsumer<T extends unknown, U extends unknown>(paramarg0: Method): (param0: T, param1: U) => void;
    static asBiFunction<T extends unknown, U extends unknown, R extends unknown>(paramarg0: Method): (param0: T, param1: U) => R;
    static asFailableBiConsumer<T extends unknown, U extends unknown>(paramarg0: Method): (param0: T, param1: U) => void;
    static asFailableBiFunction<T extends unknown, U extends unknown, R extends unknown>(paramarg0: Method): (param0: T, param1: U) => R;
    static asFailableFunction<T extends unknown, R extends unknown>(paramarg0: Method): (param0: T) => R;
    static asFailableSupplier<R extends unknown>(paramarg0: Method): () => R;
    static asFunction<T extends unknown, R extends unknown>(paramarg0: Method): (param0: T) => R;
    static asInterfaceInstance<T extends unknown>(paramarg0: Class<T>, paramarg1: Method): T;
    static asSupplier<R extends unknown>(paramarg0: Method): () => R;
    private constructor()
}