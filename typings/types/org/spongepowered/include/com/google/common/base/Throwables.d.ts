import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class Throwables extends Object {
    static propagateIfInstanceOf(paramarg0: Throwable, paramarg1: Class<Throwable>): void;
    static propagateIfPossible(paramarg0: Throwable, paramarg1: Class<Throwable>): void;
    static propagateIfPossible(paramarg0: Throwable): void;
    static throwIfInstanceOf(paramarg0: Throwable, paramarg1: Class<Throwable>): void;
    static throwIfUnchecked(paramarg0: Throwable): void;
}