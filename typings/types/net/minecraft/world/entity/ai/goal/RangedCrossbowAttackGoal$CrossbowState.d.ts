import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RangedCrossbowAttackGoal$CrossbowState extends Enum<RangedCrossbowAttackGoal$CrossbowState> {
    static CHARGED: RangedCrossbowAttackGoal$CrossbowState;
    static CHARGING: RangedCrossbowAttackGoal$CrossbowState;
    static READY_TO_ATTACK: RangedCrossbowAttackGoal$CrossbowState;
    static UNCHARGED: RangedCrossbowAttackGoal$CrossbowState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RangedCrossbowAttackGoal$CrossbowState;
    static values(): RangedCrossbowAttackGoal$CrossbowState[];
    private constructor()
    name(): "UNCHARGED" | "CHARGING" | "CHARGED" | "READY_TO_ATTACK";
}