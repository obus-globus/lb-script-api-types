import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RetryAction extends Object {
    static NO_RETRY: RetryAction;
    static waitFor(paramarg0: number): RetryAction;
    static waitFor(paramarg0: number, paramarg1: TimeUnit): RetryAction;
    private constructor(arg0: boolean, arg1: number)
    // private shouldRetry: boolean;
    // private waitMillis: number;
    shouldRetry(): boolean;
    sleep(): void;
    waitMillis(): number;
}