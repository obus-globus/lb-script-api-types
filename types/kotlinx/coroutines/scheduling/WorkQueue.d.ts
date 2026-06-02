import type { Object } from '../../../java/lang/Object.d.ts'
import type { Ref$ObjectRef } from '../../../kotlin/jvm/internal/Ref$ObjectRef.d.ts'
import type { GlobalQueue } from '../../../kotlinx/coroutines/scheduling/GlobalQueue.d.ts'
import type { Task } from '../../../kotlinx/coroutines/scheduling/Task.d.ts'
export class WorkQueue extends Object {
    constructor()
    add(task: Task, fair: boolean): Task | null;
    // private addLast(task: Task): Task | null;
    offloadAllWorkTo(globalQueue: GlobalQueue): void;
    poll(): Task | null;
    pollBlocking(): Task | null;
    // private pollBuffer(): Task | null;
    pollCpu(): Task | null;
    // private pollTo(queue: GlobalQueue): boolean;
    // private pollWithExclusiveMode(onlyBlocking: boolean): Task | null;
    // private stealWithExclusiveMode(stealingMode: number): Task | null;
    // private tryExtractFromTheMiddle(index: number, onlyBlocking: boolean): Task | null;
    trySteal(stealingMode: number, stolenTaskRef: Ref$ObjectRef<Task>): number;
    // private tryStealLastScheduled(stealingMode: number, stolenTaskRef: Ref$ObjectRef<Task>): number;
}