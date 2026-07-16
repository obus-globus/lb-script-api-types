import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { BinaryOperator } from '../../../java/util/function/BinaryOperator.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Collector$Characteristics } from '../../../java/util/stream/Collector$Characteristics.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Collector<T extends unknown, A extends unknown, R extends unknown> extends Object {
    accumulator(): (param0: A, param1: T) => void;
    characteristics(): Collector$Characteristics[];
    combiner(): (param0: A, param1: A) => A;
    finisher(): (param0: A) => R;
    supplier(): () => A;
}