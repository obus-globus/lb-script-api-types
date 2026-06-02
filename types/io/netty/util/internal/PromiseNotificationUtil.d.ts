import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { InternalLogger } from '../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PromiseNotificationUtil extends Object {
    static tryCancel(paramarg0: Promise<Object>, paramarg1: InternalLogger): void;
    static tryFailure(paramarg0: Promise<Object>, paramarg1: Throwable, paramarg2: InternalLogger): void;
    static trySuccess(paramarg0: Promise<Object>, paramarg1: Object | null, paramarg2: InternalLogger): void;
    private constructor()
}