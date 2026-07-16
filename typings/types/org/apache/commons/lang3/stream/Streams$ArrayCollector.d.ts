import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BinaryOperator } from '../../../../../java/util/function/BinaryOperator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { Collector$Characteristics } from '../../../../../java/util/stream/Collector$Characteristics.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Streams$ArrayCollector<E extends unknown> extends Object implements Collector<E, E[], E[]> {
    static of<T extends unknown, A extends unknown, R extends unknown>(paramarg0: () => A, paramarg1: (param0: A, param1: T) => void, paramarg2: (param0: A, param1: A) => A, paramarg3: (param0: A) => R, ...paramarg4: Collector$Characteristics[]): Collector<T, A, R>;
    static of<T extends unknown, R extends unknown>(paramarg0: () => R, paramarg1: (param0: R, param1: T) => void, paramarg2: (param0: R, param1: R) => R, ...paramarg3: Collector$Characteristics[]): Collector<T, R, R>;
    constructor(arg0: Class<E>)
    // private elementType: Class<E>;
    accumulator(): (param0: E[], param1: E) => void;
    characteristics(): Collector$Characteristics[];
    combiner(): (param0: E[], param1: E[]) => E[];
    finisher(): (param0: E[]) => E[];
    supplier(): () => E[];
}