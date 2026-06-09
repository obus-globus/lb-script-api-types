import type { Task } from '../../../../../com/viaversion/viaversion/api/scheduler/Task.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Scheduler extends Object {
    execute(arg0: () => void): Task;
    schedule(arg0: () => void, arg1: number, arg2: TimeUnit): Task;
    scheduleRepeating(arg0: () => void, arg1: number, arg2: number, arg3: TimeUnit): Task;
    shutdown(): void;
}