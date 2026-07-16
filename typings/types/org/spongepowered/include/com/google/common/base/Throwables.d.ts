import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class Throwables extends Object {
    static propagateIfInstanceOf<X extends Throwable>(paramarg0: Throwable, paramarg1: Class<X>): void;
    static propagateIfPossible<X extends Throwable>(paramarg0: Throwable, paramarg1: Class<X>): void;
    static propagateIfPossible(paramarg0: Throwable): void;
    static throwIfInstanceOf<X extends Throwable>(paramarg0: Throwable, paramarg1: Class<X>): void;
    static throwIfUnchecked(paramarg0: Throwable): void;
}