import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LimitedDispatcher } from '../../../kotlinx/coroutines/internal/LimitedDispatcher.d.ts'
export class LimitedDispatcher$Worker extends Object implements Runnable {
    constructor(null_: LimitedDispatcher, currentTask: () => void)
    // private currentTask: () => void;
    run(): void;
}