import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IntObjectBiConsumer<V extends unknown> extends BiConsumer<number, V>, Object {
    accept(arg0: number, arg1: V): void;
    andThen(arg0: (param0: number, param1: V) => void): (param0: number, param1: V) => void;
}