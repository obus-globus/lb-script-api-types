import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BeehiveBlockEntity$BeeReleaseStatus extends Enum<BeehiveBlockEntity$BeeReleaseStatus> {
    static BEE_RELEASED: BeehiveBlockEntity$BeeReleaseStatus;
    static EMERGENCY: BeehiveBlockEntity$BeeReleaseStatus;
    static HONEY_DELIVERED: BeehiveBlockEntity$BeeReleaseStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BeehiveBlockEntity$BeeReleaseStatus;
    static values(): BeehiveBlockEntity$BeeReleaseStatus[];
    private constructor()
    name(): "HONEY_DELIVERED" | "BEE_RELEASED" | "EMERGENCY";
}