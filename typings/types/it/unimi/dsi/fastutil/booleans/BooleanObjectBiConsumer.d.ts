import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanObjectBiConsumer<V extends Object | number | string | boolean> extends BiConsumer<boolean, V>, Object{
    accept(arg0: boolean, arg1: V): void;
    andThen(arg0: (param0: V, param1: boolean) => void): (param0: V, param1: boolean) => void;
    andThen(arg0: (param0: boolean, param1: V) => void): (param0: boolean, param1: V) => void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}