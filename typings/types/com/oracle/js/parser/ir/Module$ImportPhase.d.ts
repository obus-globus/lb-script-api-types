import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Module$ImportPhase extends Enum<Module$ImportPhase> {
    static Defer: Module$ImportPhase;
    static Evaluation: Module$ImportPhase;
    static Source: Module$ImportPhase;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Module$ImportPhase;
    static values(): Module$ImportPhase[];
    private constructor()
    name(): "Evaluation" | "Source" | "Defer";
}