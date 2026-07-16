import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
export class VelocityReduce$ReleaseReason extends Enum<VelocityReduce$ReleaseReason> {
    static FLAG: VelocityReduce$ReleaseReason;
    static MAX_DELAY: VelocityReduce$ReleaseReason;
    static OUT_OF_RANGE: VelocityReduce$ReleaseReason;
    static SPECTATOR: VelocityReduce$ReleaseReason;
    static TARGET_REACHED: VelocityReduce$ReleaseReason;
    static getEntries(): VelocityReduce$ReleaseReason[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): VelocityReduce$ReleaseReason;
    static values(): VelocityReduce$ReleaseReason[];
    private constructor(debugSuffix: string | null)
    readonly debugSuffix: string | null;
    name(): "TARGET_REACHED" | "FLAG" | "SPECTATOR" | "OUT_OF_RANGE" | "MAX_DELAY";
}