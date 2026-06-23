import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ObjectDoubleBiConsumer<K extends unknown> extends BiConsumer<K, number>, Object {
    accept(arg0: K, arg1: number): void;
    andThen(arg0: (param0: K, param1: number) => void): (param0: K, param1: number) => void;
}