import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatIntBiConsumer extends BiConsumer<number, number>, Object{
    accept(arg0: number, arg1: number): void;
    andThen(arg0: (param0: number, param1: number) => void): (param0: number, param1: number) => void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}