import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Collector$Characteristics } from '../../../../java/util/stream/Collector$Characteristics.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Streams$ArrayCollector<O extends unknown> extends Object implements Collector<O, O[], O[]> {
    constructor(arg0: Class<O>)
    // private elementType: Class<O>;
    accumulator(): (param0: O[], param1: O) => void;
    characteristics(): Collector$Characteristics[];
    combiner(): (param0: O[], param1: O[]) => O[];
    finisher(): (param0: O[]) => O[];
    supplier(): () => O[];
}