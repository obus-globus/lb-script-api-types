import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BinaryOperator } from '../../../../../java/util/function/BinaryOperator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { Collector$Characteristics } from '../../../../../java/util/stream/Collector$Characteristics.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Streams$ArrayCollector<E extends Object | number | string | boolean> extends Object implements Collector<E, E[], E[]> {
    static of(paramarg0: () => Object | null, paramarg1: (param0: Object | null, param1: Object | null) => void, paramarg2: (param0: Object | null, param1: Object | null) => unknown, paramarg3: (param0: Object | null) => Object | null, paramarg4: (Object | null)[]): Collector<Object, Object, Object>;
    static of(paramarg0: () => Object | null, paramarg1: (param0: Object | null, param1: Object | null) => void, paramarg2: (param0: Object | null, param1: Object | null) => unknown, paramarg3: (Object | null)[]): Collector<Object, Object, Object>;
    constructor(arg0: Class<E>)
    // private elementType: Class<E>;
    accumulator(): (param0: E[], param1: E) => void;
    characteristics(): Collector$Characteristics[];
    combiner(): (param0: E[], param1: Object | null) => unknown;
    finisher(): (param0: E[]) => E[];
    supplier(): () => E[];
}