import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableDoubleConsumer<E extends Throwable> extends Object {
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
}