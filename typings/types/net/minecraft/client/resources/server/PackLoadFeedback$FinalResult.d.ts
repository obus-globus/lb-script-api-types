import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PackLoadFeedback$FinalResult extends Enum<PackLoadFeedback$FinalResult> {
    static ACTIVATION_FAILED: PackLoadFeedback$FinalResult;
    static APPLIED: PackLoadFeedback$FinalResult;
    static DECLINED: PackLoadFeedback$FinalResult;
    static DISCARDED: PackLoadFeedback$FinalResult;
    static DOWNLOAD_FAILED: PackLoadFeedback$FinalResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PackLoadFeedback$FinalResult;
    static values(): PackLoadFeedback$FinalResult[];
    private constructor()
    name(): "DECLINED" | "APPLIED" | "DISCARDED" | "DOWNLOAD_FAILED" | "ACTIVATION_FAILED";
}