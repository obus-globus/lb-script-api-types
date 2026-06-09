import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteBooleanBiConsumer extends BiConsumer<number, boolean>, Object {
    accept(arg0: number, arg1: boolean): void;
    andThen(arg0: (param0: number, param1: boolean) => void): (param0: number, param1: boolean) => void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}