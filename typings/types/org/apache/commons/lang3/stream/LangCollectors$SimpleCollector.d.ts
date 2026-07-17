import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BinaryOperator } from '../../../../../java/util/function/BinaryOperator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { Collector$Characteristics } from '../../../../../java/util/stream/Collector$Characteristics.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LangCollectors$SimpleCollector<T extends unknown, A extends unknown, R extends unknown> extends Object implements Collector<T, A, R> {
    private constructor(arg0: () => A, arg1: (param0: A, param1: T) => void, arg2: (param0: A, param1: A) => A, arg3: (param0: A) => R, arg4: Collector$Characteristics[])
    // private accumulator: (param0: A, param1: T) => void;
    // private characteristics: Collector$Characteristics[];
    // private combiner: (param0: A, param1: A) => A;
    // private finisher: (param0: A) => R;
    // private supplier: () => A;
    accumulator(): (param0: A, param1: T) => void;
    characteristics(): Collector$Characteristics[];
    combiner(): (param0: A, param1: A) => A;
    finisher(): (param0: A) => R;
    supplier(): () => A;
}