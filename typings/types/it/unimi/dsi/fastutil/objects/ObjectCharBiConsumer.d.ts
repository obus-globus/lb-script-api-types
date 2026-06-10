import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ObjectCharBiConsumer<K extends Object | number | string | boolean> extends BiConsumer<K, string>, Object {
    accept(arg0: K, arg1: string): void;
    andThen(arg0: (param0: K, param1: string) => void): (param0: K, param1: string) => void;
}