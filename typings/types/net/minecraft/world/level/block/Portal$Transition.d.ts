import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Portal$Transition extends Enum<Portal$Transition> {
    static CONFUSION: Portal$Transition;
    static NONE: Portal$Transition;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Portal$Transition;
    static values(): Portal$Transition[];
    private constructor()
    name(): "CONFUSION" | "NONE";
}