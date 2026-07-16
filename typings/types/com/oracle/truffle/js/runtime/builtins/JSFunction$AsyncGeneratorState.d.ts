import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSFunction$AsyncGeneratorState extends Enum<JSFunction$AsyncGeneratorState> {
    static AwaitingReturn: JSFunction$AsyncGeneratorState;
    static Completed: JSFunction$AsyncGeneratorState;
    static Executing: JSFunction$AsyncGeneratorState;
    static SuspendedStart: JSFunction$AsyncGeneratorState;
    static SuspendedYield: JSFunction$AsyncGeneratorState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JSFunction$AsyncGeneratorState;
    static values(): JSFunction$AsyncGeneratorState[];
    private constructor()
    name(): "SuspendedStart" | "SuspendedYield" | "Executing" | "AwaitingReturn" | "Completed";
}