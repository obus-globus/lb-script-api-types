import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CacheRefreshReason extends Enum<CacheRefreshReason> {
    static CLAIMS: CacheRefreshReason;
    static EXPIRED: CacheRefreshReason;
    static FORCE_REFRESH: CacheRefreshReason;
    static NOT_APPLICABLE: CacheRefreshReason;
    static NO_CACHED_ACCESS_TOKEN: CacheRefreshReason;
    static PROACTIVE_REFRESH: CacheRefreshReason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CacheRefreshReason;
    static values(): CacheRefreshReason[];
    private constructor(arg2: number)
    // private telemetryValue: number;
    name(): "NOT_APPLICABLE" | "FORCE_REFRESH" | "CLAIMS" | "NO_CACHED_ACCESS_TOKEN" | "EXPIRED" | "PROACTIVE_REFRESH";
}