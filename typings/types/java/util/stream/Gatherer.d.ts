import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { BinaryOperator } from '../../../java/util/function/BinaryOperator.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Gatherer$Downstream } from '../../../java/util/stream/Gatherer$Downstream.d.ts'
import type { Gatherer$Integrator } from '../../../java/util/stream/Gatherer$Integrator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Gatherer<T extends Object | number | string | boolean, A extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    andThen(arg0: Gatherer<R, Object, RR>): Gatherer<T, Object, RR>;
    combiner(): (param0: A, param1: Object | null) => unknown;
    finisher(): (param0: A, param1: (param0: R) => kotlin.Boolean) => void;
    initializer(): () => A;
    integrator(): (param0: A, param1: T, param2: R) => kotlin.Boolean;
}