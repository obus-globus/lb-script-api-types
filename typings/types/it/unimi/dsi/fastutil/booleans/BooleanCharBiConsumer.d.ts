import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanCharBiConsumer extends BiConsumer<boolean, string>, Object {
    accept(arg0: boolean, arg1: string): void;
    andThen(arg0: (param0: boolean, param1: string) => void): (param0: boolean, param1: string) => void;
}