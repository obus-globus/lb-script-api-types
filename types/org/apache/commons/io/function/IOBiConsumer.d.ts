import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOBiConsumer<T extends Object | number | string | boolean, U extends Object | number | string | boolean> extends Object{
    accept(arg0: T, arg1: U): void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
    asBiConsumer(): (param0: T, param1: U) => void;
}