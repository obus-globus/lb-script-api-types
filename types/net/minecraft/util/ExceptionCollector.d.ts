import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ExceptionCollector<T extends Throwable> extends Object {
    constructor()
    // private result: T;
    add(throwable: T): void;
    throwIfPresent(): void;
}