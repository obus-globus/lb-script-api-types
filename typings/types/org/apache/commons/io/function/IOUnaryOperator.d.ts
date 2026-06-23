import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
import type { IOSupplier } from '../../../../../org/apache/commons/io/function/IOSupplier.d.ts'
export interface IOUnaryOperator<T extends unknown> extends Object, IOFunction<T, T> {
    andThen(arg0: (param0: T) => void): (param0: T) => void;
    andThen<V extends unknown>(arg0: (param0: T) => V): (param0: T) => V;
    asFunction(): (param0: T) => T;
    asUnaryOperator(): (param0: T) => Object | null;
    compose<V extends unknown>(arg0: (param0: V) => T): (param0: V) => T;
    compose(arg0: () => T): () => T;
}