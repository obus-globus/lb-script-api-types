import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatCharBiConsumer extends BiConsumer<number, string>, Object{
    accept(arg0: number, arg1: string): void;
    accept(arg0: number, arg1: string): void;
    andThen(arg0: (param0: number, param1: string) => void): (param0: number, param1: string) => void;
    andThen(arg0: (param0: number, param1: string) => void): (param0: number, param1: string) => void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}