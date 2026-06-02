import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableConsumer<T extends Object | number | string | boolean, E extends Throwable> extends Object{
    accept(arg0: T): void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
}