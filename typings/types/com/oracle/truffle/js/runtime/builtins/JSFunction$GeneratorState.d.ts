import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSFunction$GeneratorState extends Enum<JSFunction$GeneratorState> {
    static Completed: JSFunction$GeneratorState;
    static Executing: JSFunction$GeneratorState;
    static SuspendedStart: JSFunction$GeneratorState;
    static SuspendedYield: JSFunction$GeneratorState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSFunction$GeneratorState;
    static values(): JSFunction$GeneratorState[];
    private constructor()
    name(): "SuspendedStart" | "SuspendedYield" | "Executing" | "Completed";
}