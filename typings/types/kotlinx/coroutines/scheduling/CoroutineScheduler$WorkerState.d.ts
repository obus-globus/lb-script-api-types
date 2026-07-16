import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CoroutineScheduler$WorkerState extends Enum<CoroutineScheduler$WorkerState> {
    static BLOCKING: CoroutineScheduler$WorkerState;
    static CPU_ACQUIRED: CoroutineScheduler$WorkerState;
    static DORMANT: CoroutineScheduler$WorkerState;
    static PARKING: CoroutineScheduler$WorkerState;
    static TERMINATED: CoroutineScheduler$WorkerState;
    static getEntries(): CoroutineScheduler$WorkerState[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CoroutineScheduler$WorkerState;
    static values(): CoroutineScheduler$WorkerState[];
    private constructor()
    name(): "CPU_ACQUIRED" | "BLOCKING" | "PARKING" | "DORMANT" | "TERMINATED";
}