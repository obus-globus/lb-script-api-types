import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SpearAttack$SpearStatus extends Enum<SpearAttack$SpearStatus> {
    static APPROACH: SpearAttack$SpearStatus;
    static CHARGING: SpearAttack$SpearStatus;
    static RETREAT: SpearAttack$SpearStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SpearAttack$SpearStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "APPROACH" | "CHARGING" | "RETREAT";
}