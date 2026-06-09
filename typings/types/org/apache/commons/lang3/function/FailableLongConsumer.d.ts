import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableLongConsumer<E extends Throwable> extends Object {
    accept(arg0: number): void;
    andThen(arg0: (param0: E) => void): (param0: E) => void;
}