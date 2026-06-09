import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ObjectBooleanBiConsumer<K extends Object | number | string | boolean> extends BiConsumer<K, boolean>, Object {
    accept(arg0: K, arg1: boolean): void;
    andThen(arg0: (param0: K, param1: Object | null) => void): (param0: K, param1: Object | null) => void;
    andThen(arg0: (param0: K, param1: boolean) => void): (param0: K, param1: boolean) => void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}