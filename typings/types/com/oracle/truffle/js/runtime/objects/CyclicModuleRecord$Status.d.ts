import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CyclicModuleRecord$Status extends Enum<CyclicModuleRecord$Status> {
    static Evaluated: CyclicModuleRecord$Status;
    static Evaluating: CyclicModuleRecord$Status;
    static EvaluatingAsync: CyclicModuleRecord$Status;
    static Linked: CyclicModuleRecord$Status;
    static Linking: CyclicModuleRecord$Status;
    static New: CyclicModuleRecord$Status;
    static Unlinked: CyclicModuleRecord$Status;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CyclicModuleRecord$Status;
    static values(): CyclicModuleRecord$Status[];
    private constructor()
    name(): "New" | "Unlinked" | "Linking" | "Linked" | "Evaluating" | "EvaluatingAsync" | "Evaluated";
}