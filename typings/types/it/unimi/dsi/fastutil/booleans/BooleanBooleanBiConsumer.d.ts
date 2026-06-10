import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanBooleanBiConsumer extends BiConsumer<boolean, boolean>, Object {
    accept(arg0: boolean, arg1: boolean): void;
    andThen(arg0: (param0: boolean, param1: boolean) => void): (param0: boolean, param1: boolean) => void;
}