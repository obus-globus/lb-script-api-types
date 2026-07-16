import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class ExceptionsKt extends Object {
    static CancellationException(message: string | null, cause: Throwable | null): CancellationException;
}