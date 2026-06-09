import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanConsumer extends Consumer<boolean>, Object {
    accept(arg0: boolean): void;
    andThen(arg0: (param0: boolean) => void): (param0: boolean) => void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
}