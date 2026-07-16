import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSFunction$AsyncGeneratorState extends Enum<JSFunction$AsyncGeneratorState> {
    static AwaitingReturn: JSFunction$AsyncGeneratorState;
    static Completed: JSFunction$AsyncGeneratorState;
    static Executing: JSFunction$AsyncGeneratorState;
    static SuspendedStart: JSFunction$AsyncGeneratorState;
    static SuspendedYield: JSFunction$AsyncGeneratorState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSFunction$AsyncGeneratorState;
    static values(): JSFunction$AsyncGeneratorState[];
    private constructor()
    name(): "SuspendedStart" | "SuspendedYield" | "Executing" | "AwaitingReturn" | "Completed";
}