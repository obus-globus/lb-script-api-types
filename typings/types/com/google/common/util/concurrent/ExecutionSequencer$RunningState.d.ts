import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ExecutionSequencer$RunningState extends Enum<ExecutionSequencer$RunningState> {
    static CANCELLED: ExecutionSequencer$RunningState;
    static NOT_RUN: ExecutionSequencer$RunningState;
    static STARTED: ExecutionSequencer$RunningState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ExecutionSequencer$RunningState;
    static values(): ExecutionSequencer$RunningState[];
    private constructor()
    name(): "NOT_RUN" | "CANCELLED" | "STARTED";
}