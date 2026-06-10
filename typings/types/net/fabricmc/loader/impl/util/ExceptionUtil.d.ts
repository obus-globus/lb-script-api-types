import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ExceptionUtil extends Object {
    static gatherExceptions(paramarg0: Throwable, paramarg1: Throwable | null, paramarg2: (param0: Throwable) => Throwable | null): Throwable | null;
    static wrap(paramarg0: Throwable): RuntimeException;
    constructor()
}