import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CrossbowAttack$CrossbowState extends Enum<CrossbowAttack$CrossbowState> {
    static CHARGED: CrossbowAttack$CrossbowState;
    static CHARGING: CrossbowAttack$CrossbowState;
    static READY_TO_ATTACK: CrossbowAttack$CrossbowState;
    static UNCHARGED: CrossbowAttack$CrossbowState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CrossbowAttack$CrossbowState;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNCHARGED" | "CHARGING" | "CHARGED" | "READY_TO_ATTACK";
}