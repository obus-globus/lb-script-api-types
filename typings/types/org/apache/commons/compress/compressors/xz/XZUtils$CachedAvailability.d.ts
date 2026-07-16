import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class XZUtils$CachedAvailability extends Enum<XZUtils$CachedAvailability> {
    static CACHED_AVAILABLE: XZUtils$CachedAvailability;
    static CACHED_UNAVAILABLE: XZUtils$CachedAvailability;
    static DONT_CACHE: XZUtils$CachedAvailability;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): XZUtils$CachedAvailability;
    static values(): XZUtils$CachedAvailability[];
    private constructor()
    name(): "DONT_CACHE" | "CACHED_AVAILABLE" | "CACHED_UNAVAILABLE";
}