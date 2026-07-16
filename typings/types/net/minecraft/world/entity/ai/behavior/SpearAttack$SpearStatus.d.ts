import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SpearAttack$SpearStatus extends Enum<SpearAttack$SpearStatus> {
    static APPROACH: SpearAttack$SpearStatus;
    static CHARGING: SpearAttack$SpearStatus;
    static RETREAT: SpearAttack$SpearStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SpearAttack$SpearStatus;
    static values(): SpearAttack$SpearStatus[];
    private constructor()
    name(): "APPROACH" | "CHARGING" | "RETREAT";
}