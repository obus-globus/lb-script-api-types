import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ZstdUtils$CachedAvailability extends Enum<ZstdUtils$CachedAvailability> {
    static CACHED_AVAILABLE: ZstdUtils$CachedAvailability;
    static CACHED_UNAVAILABLE: ZstdUtils$CachedAvailability;
    static DONT_CACHE: ZstdUtils$CachedAvailability;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ZstdUtils$CachedAvailability;
    static values(): ZstdUtils$CachedAvailability[];
    private constructor()
    name(): "DONT_CACHE" | "CACHED_AVAILABLE" | "CACHED_UNAVAILABLE";
}