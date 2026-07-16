import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Module$ImportPhase extends Enum<Module$ImportPhase> {
    static Defer: Module$ImportPhase;
    static Evaluation: Module$ImportPhase;
    static Source: Module$ImportPhase;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Module$ImportPhase;
    static values(): Module$ImportPhase[];
    private constructor()
    name(): "Evaluation" | "Source" | "Defer";
}