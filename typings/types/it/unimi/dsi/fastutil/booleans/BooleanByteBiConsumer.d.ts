import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanByteBiConsumer extends BiConsumer<boolean, number>, Object{
    accept(arg0: boolean, arg1: number): void;
    andThen(arg0: (param0: boolean, param1: number) => void): (param0: boolean, param1: number) => void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}