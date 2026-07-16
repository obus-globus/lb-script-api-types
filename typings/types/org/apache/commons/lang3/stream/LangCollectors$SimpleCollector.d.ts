import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BinaryOperator } from '../../../../../java/util/function/BinaryOperator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { Collector$Characteristics } from '../../../../../java/util/stream/Collector$Characteristics.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LangCollectors$SimpleCollector<T extends unknown, A extends unknown, R extends unknown> extends Object implements Collector<T, A, R> {
    static of<T extends unknown, A extends unknown, R extends unknown>(paramarg0: () => A, paramarg1: (param0: A, param1: T) => void, paramarg2: (param0: A, param1: A) => A, paramarg3: (param0: A) => R, ...paramarg4: Collector$Characteristics[]): Collector<T, A, R>;
    static of<T extends unknown, R extends unknown>(paramarg0: () => R, paramarg1: (param0: R, param1: T) => void, paramarg2: (param0: R, param1: R) => R, ...paramarg3: Collector$Characteristics[]): Collector<T, R, R>;
    constructor(arg0: () => Object, arg1: (param0: Object, param1: Object) => void, arg2: (param0: Object, param1: Object) => Object, arg3: (param0: Object) => Object, arg4: (Object | null)[], arg5: any)
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