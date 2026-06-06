import type { Runnable } from '../java/lang/Runnable.d.ts'
import type { ExecutorService } from '../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Call } from '../okhttp3/Call.d.ts'
import type { RealCall } from '../okhttp3/internal/connection/RealCall.d.ts'
import type { RealCall$AsyncCall } from '../okhttp3/internal/connection/RealCall$AsyncCall.d.ts'
export class Dispatcher extends Object {
    constructor()
    constructor(executorService: ExecutorService | null)
    executorService(): ExecutorService;
    // private executorServiceOrNull: ExecutorService | null;
    idleCallback: (() => void) | null;
    maxRequests: number;
    maxRequestsPerHost: number;
    // private readyAsyncCalls: RealCall$AsyncCall[];
    // private runningAsyncCalls: RealCall$AsyncCall[];
    // private runningSyncCalls: RealCall[];
    cancelAll(): void;
    enqueue(call: RealCall$AsyncCall): void;
    executed(call: RealCall): boolean;
    executorService(): ExecutorService;
    // private findExistingCallWithHost(host: string): RealCall$AsyncCall | null;
    finished(call: RealCall): void;
    finished(call: RealCall$AsyncCall): void;
    // private promoteAndExecute(enqueuedCall: RealCall$AsyncCall | null, finishedCall: RealCall | null, finishedAsyncCall: RealCall$AsyncCall | null): void;
    queuedCalls(): Call[];
    queuedCallsCount(): number;
    runningCalls(): Call[];
    runningCallsCount(): number;
}