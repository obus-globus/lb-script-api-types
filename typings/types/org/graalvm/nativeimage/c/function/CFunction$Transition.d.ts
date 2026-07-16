import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CFunction$Transition extends Enum<CFunction$Transition> {
    static NO_TRANSITION: CFunction$Transition;
    static TO_NATIVE: CFunction$Transition;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CFunction$Transition;
    static values(): CFunction$Transition[];
    private constructor()
    name(): "TO_NATIVE" | "NO_TRANSITION";
}