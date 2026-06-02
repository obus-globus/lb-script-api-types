import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RangedCrossbowAttackGoal$CrossbowState extends Enum<RangedCrossbowAttackGoal$CrossbowState> {
    static CHARGED: RangedCrossbowAttackGoal$CrossbowState;
    static CHARGING: RangedCrossbowAttackGoal$CrossbowState;
    static READY_TO_ATTACK: RangedCrossbowAttackGoal$CrossbowState;
    static UNCHARGED: RangedCrossbowAttackGoal$CrossbowState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RangedCrossbowAttackGoal$CrossbowState;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNCHARGED" | "CHARGING" | "CHARGED" | "READY_TO_ATTACK";
}