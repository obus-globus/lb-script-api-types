import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharBooleanBiConsumer extends BiConsumer<string, boolean>, Object {
    accept(arg0: string, arg1: boolean): void;
    andThen(arg0: (param0: string, param1: boolean) => void): (param0: string, param1: boolean) => void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}