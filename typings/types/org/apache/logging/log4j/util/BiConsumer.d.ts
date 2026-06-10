import type { BiConsumer as BiConsumer_2 } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BiConsumer<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends BiConsumer_2<K, V>, Object {
    accept(k: K, v: V): void;
    andThen(arg0: (param0: K, param1: V) => void): (param0: K, param1: V) => void;
}