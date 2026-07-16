import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Portal$Transition extends Enum<Portal$Transition> {
    static CONFUSION: Portal$Transition;
    static NONE: Portal$Transition;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Portal$Transition;
    static values(): Portal$Transition[];
    private constructor()
    name(): "CONFUSION" | "NONE";
}