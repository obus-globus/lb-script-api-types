import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { UndeliveredElementException } from '../../../kotlinx/coroutines/internal/UndeliveredElementException.d.ts'
export class OnUndeliveredElementKt extends Object {
    static callUndeliveredElement(paramarg0: Function1<Object, void>, paramarg1: Object | null, paramarg2: CoroutineContext): void;
    static callUndeliveredElementCatchingException(paramarg0: Function1<Object, void>, paramarg1: Object | null, paramarg2: UndeliveredElementException): UndeliveredElementException;
}