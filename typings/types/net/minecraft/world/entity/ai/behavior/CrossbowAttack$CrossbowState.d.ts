import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CrossbowAttack$CrossbowState extends Enum<CrossbowAttack$CrossbowState> {
    static CHARGED: CrossbowAttack$CrossbowState;
    static CHARGING: CrossbowAttack$CrossbowState;
    static READY_TO_ATTACK: CrossbowAttack$CrossbowState;
    static UNCHARGED: CrossbowAttack$CrossbowState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CrossbowAttack$CrossbowState;
    static values(): CrossbowAttack$CrossbowState[];
    private constructor()
    name(): "UNCHARGED" | "CHARGING" | "CHARGED" | "READY_TO_ATTACK";
}