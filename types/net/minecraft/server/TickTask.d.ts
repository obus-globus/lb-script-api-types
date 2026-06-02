import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TickTask extends Object implements Runnable {
    constructor(tick: number, runnable: () => void)
    // private runnable: () => void;
    readonly tick: number;
    getTick(): number;
    run(): void;
}