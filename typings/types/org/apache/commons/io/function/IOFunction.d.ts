import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOSupplier } from '../../../../../org/apache/commons/io/function/IOSupplier.d.ts'
export interface IOFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    andThen(arg0: (param0: R) => void): (param0: T) => void;
    andThen<V extends Object | number | string | boolean>(arg0: (param0: R) => V): (param0: T) => V;
    apply(arg0: T): R;
    asFunction(): (param0: T) => R;
    compose<V extends Object | number | string | boolean>(arg0: (param0: V) => T): (param0: V) => R;
    compose(arg0: () => T): () => R;
}