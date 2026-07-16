import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ExceptionUtil extends Object {
    static gatherExceptions<T extends Throwable>(paramarg0: Throwable, paramarg1: T, paramarg2: (param0: Throwable) => T): T;
    static wrap(paramarg0: Throwable): RuntimeException;
    constructor()
}