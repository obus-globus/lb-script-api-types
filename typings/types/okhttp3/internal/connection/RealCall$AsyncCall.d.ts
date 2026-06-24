import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ExecutorService } from '../../../java/util/concurrent/ExecutorService.d.ts'
import type { RejectedExecutionException } from '../../../java/util/concurrent/RejectedExecutionException.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Callback } from '../../../okhttp3/Callback.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
export class RealCall$AsyncCall extends Object implements Runnable {
    constructor(null_: RealCall, responseCallback: Callback)
    readonly call: RealCall;
    readonly callsPerHost: AtomicInteger;
    readonly host: string;
    readonly request: Request;
    // private responseCallback: Callback;
    executeOn(executorService: ExecutorService): void;
    failRejected(e: RejectedExecutionException | null): void;
    reuseCallsPerHostFrom(other: RealCall$AsyncCall): void;
    run(): void;
}