import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharByteBiConsumer extends BiConsumer<string, number>, Object{
    accept(arg0: string, arg1: number): void;
    andThen(arg0: (param0: string, param1: number) => void): (param0: string, param1: number) => void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}