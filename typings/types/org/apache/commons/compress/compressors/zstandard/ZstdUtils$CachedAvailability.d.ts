import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ZstdUtils$CachedAvailability extends Enum<ZstdUtils$CachedAvailability> {
    static CACHED_AVAILABLE: ZstdUtils$CachedAvailability;
    static CACHED_UNAVAILABLE: ZstdUtils$CachedAvailability;
    static DONT_CACHE: ZstdUtils$CachedAvailability;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ZstdUtils$CachedAvailability;
    static values(): (Object | null)[];
    private constructor()
    name(): "DONT_CACHE" | "CACHED_AVAILABLE" | "CACHED_UNAVAILABLE";
}