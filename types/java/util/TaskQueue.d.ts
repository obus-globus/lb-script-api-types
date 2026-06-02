import type { TimerTask } from '../../java/util/TimerTask.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class TaskQueue extends Object {
    constructor()
    // private queue: TimerTask[];
    // private size: number;
    add(arg0: TimerTask): void;
    clear(): void;
    // private fixDown(arg0: number): void;
    // private fixUp(arg0: number): void;
    get(arg0: number): TimerTask;
    getMin(): TimerTask;
    heapify(): void;
    isEmpty(): boolean;
    quickRemove(arg0: number): void;
    removeMin(): void;
    rescheduleMin(arg0: number): void;
    size(): number;
}