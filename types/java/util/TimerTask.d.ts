import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class TimerTask extends Object implements Runnable {
    constructor()
    // private lock: Object;
    // private nextExecutionTime: number;
    // private period: number;
    // private state: number;
    cancel(): boolean;
    run(): void;
    scheduledExecutionTime(): number;
}