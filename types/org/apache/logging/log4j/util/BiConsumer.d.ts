import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BiConsumer<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends BiConsumer<K, V>, Object{
    accept(k: K, v: V): void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}