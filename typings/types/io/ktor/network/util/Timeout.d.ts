import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export class Timeout extends Object {
    constructor(name: string, timeoutMs: number, clock: () => number, scope: CoroutineScope, onTimeout: () => void)
    // private clock: () => number;
    // private name: string;
    // private onTimeout: () => void;
    // private scope: CoroutineScope;
    // private timeoutMs: number;
    // private workerJob: Job | null;
    finish(): void;
    // private initTimeoutJob(): Job | null;
    start(): void;
    stop(): void;
}