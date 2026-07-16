import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SequentialExecutor$WorkerRunningState extends Enum<SequentialExecutor$WorkerRunningState> {
    static IDLE: SequentialExecutor$WorkerRunningState;
    static QUEUED: SequentialExecutor$WorkerRunningState;
    static QUEUING: SequentialExecutor$WorkerRunningState;
    static RUNNING: SequentialExecutor$WorkerRunningState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SequentialExecutor$WorkerRunningState;
    static values(): SequentialExecutor$WorkerRunningState[];
    private constructor()
    name(): "IDLE" | "QUEUING" | "QUEUED" | "RUNNING";
}