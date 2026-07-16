import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CFunction$Transition extends Enum<CFunction$Transition> {
    static NO_TRANSITION: CFunction$Transition;
    static TO_NATIVE: CFunction$Transition;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CFunction$Transition;
    static values(): CFunction$Transition[];
    private constructor()
    name(): "TO_NATIVE" | "NO_TRANSITION";
}