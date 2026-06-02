import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LimitedDispatcher$Worker extends Object implements Runnable {
    constructor(null_: LimitedDispatcher$Worker, currentTask: () => void)
    // private currentTask: () => void;
    run(): void;
}