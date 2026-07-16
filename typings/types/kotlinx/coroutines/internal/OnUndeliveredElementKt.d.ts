import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { UndeliveredElementException } from '../../../kotlinx/coroutines/internal/UndeliveredElementException.d.ts'
export class OnUndeliveredElementKt extends Object {
    static callUndeliveredElement<E extends unknown>(self: (param0: E) => void, element: E, context: CoroutineContext): void;
    static callUndeliveredElementCatchingException<E extends unknown>(self: (param0: E) => void, element: E, undeliveredElementException: UndeliveredElementException | null): UndeliveredElementException | null;
}