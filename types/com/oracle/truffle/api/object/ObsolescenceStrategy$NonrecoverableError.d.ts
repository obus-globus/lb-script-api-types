import type { ThreadDeath } from '../../../../../java/lang/ThreadDeath.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ObsolescenceStrategy$NonrecoverableError extends ThreadDeath {
    constructor()
    readonly message: string | null;
    fillInStackTrace(): Throwable;
}