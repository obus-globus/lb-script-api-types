import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AnimateAction extends Enum<AnimateAction> {
    static CRITICAL_HIT: AnimateAction;
    static MAGIC_CRITICAL_HIT: AnimateAction;
    static SWING_MAIN_HAND: AnimateAction;
    static SWING_OFF_HAND: AnimateAction;
    static UNUSED: AnimateAction;
    static WAKE_UP: AnimateAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AnimateAction;
    static values(): AnimateAction[];
    private constructor()
    name(): "SWING_MAIN_HAND" | "UNUSED" | "WAKE_UP" | "SWING_OFF_HAND" | "CRITICAL_HIT" | "MAGIC_CRITICAL_HIT";
}