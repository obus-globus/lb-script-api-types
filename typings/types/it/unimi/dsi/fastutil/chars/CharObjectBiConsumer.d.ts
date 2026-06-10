import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharObjectBiConsumer<V extends Object | number | string | boolean> extends BiConsumer<string, V>, Object {
    accept(arg0: string, arg1: V): void;
    andThen(arg0: (param0: string, param1: V) => void): (param0: string, param1: V) => void;
}