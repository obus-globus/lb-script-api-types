import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class OriginCheckResult extends Enum<OriginCheckResult> {
    static Failed: OriginCheckResult;
    static OK: OriginCheckResult;
    static SkipCORS: OriginCheckResult;
    static getEntries(): OriginCheckResult[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): OriginCheckResult;
    static values(): OriginCheckResult[];
    private constructor()
    name(): "OK" | "SkipCORS" | "Failed";
}