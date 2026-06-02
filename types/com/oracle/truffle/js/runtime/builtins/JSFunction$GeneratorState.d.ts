import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSFunction$GeneratorState extends Enum<JSFunction$GeneratorState> {
    static Completed: JSFunction$GeneratorState;
    static Executing: JSFunction$GeneratorState;
    static SuspendedStart: JSFunction$GeneratorState;
    static SuspendedYield: JSFunction$GeneratorState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JSFunction$GeneratorState;
    static values(): (Object | null)[];
    private constructor()
    name(): "SuspendedStart" | "SuspendedYield" | "Executing" | "Completed";
}