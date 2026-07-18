import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Key } from '../../../../kotlin/coroutines/CoroutineContext$Key.d.ts'
import type { CoroutineExceptionHandler } from '../../../../kotlinx/coroutines/CoroutineExceptionHandler.d.ts'
import type { CoroutineExceptionHandler$Key } from '../../../../kotlinx/coroutines/CoroutineExceptionHandler$Key.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class DefaultUncaughtExceptionHandler extends Object implements CoroutineExceptionHandler {
    static Key: CoroutineExceptionHandler$Key;
    constructor(logger: () => Logger)
    constructor(logger: Logger)
    readonly key: CoroutineContext$Key<any>;
    // private logger: () => Logger;
    handleException(context: CoroutineContext, exception: Throwable): void;
}