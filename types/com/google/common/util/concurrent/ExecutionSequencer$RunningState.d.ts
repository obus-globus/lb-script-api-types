import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ExecutionSequencer$RunningState extends Enum<ExecutionSequencer$RunningState> {
    static CANCELLED: ExecutionSequencer$RunningState;
    static NOT_RUN: ExecutionSequencer$RunningState;
    static STARTED: ExecutionSequencer$RunningState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ExecutionSequencer$RunningState;
    static values(): (Object | null)[];
    private constructor()
    name(): "NOT_RUN" | "CANCELLED" | "STARTED";
}