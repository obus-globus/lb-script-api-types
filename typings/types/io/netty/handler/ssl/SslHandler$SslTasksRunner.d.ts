import type { SslHandler } from '../../../../io/netty/handler/ssl/SslHandler.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SslHandler$SslTasksRunner extends Object implements Runnable {
    constructor(null_: SslHandler, arg1: boolean)
    // private inUnwrap: boolean;
    // private runCompleteTask: () => void;
    // private handleException(arg0: Throwable): void;
    // private resumeOnEventExecutor(): void;
    run(): void;
    runComplete(): void;
    // private safeExceptionCaught(arg0: Throwable): void;
    // private taskError(arg0: Throwable): void;
    // private tryDecodeAgain(): void;
    // private wrapIfNeeded(arg0: Throwable): Throwable;
}