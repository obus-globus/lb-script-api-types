import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class InteractionHand extends Enum<InteractionHand> {
    static MAIN_HAND: InteractionHand;
    static OFF_HAND: InteractionHand;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InteractionHand;
    static values(): InteractionHand[];
    private constructor()
    name(): "MAIN_HAND" | "OFF_HAND";
}