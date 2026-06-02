import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class XZUtils$CachedAvailability extends Enum<XZUtils$CachedAvailability> {
    static CACHED_AVAILABLE: XZUtils$CachedAvailability;
    static CACHED_UNAVAILABLE: XZUtils$CachedAvailability;
    static DONT_CACHE: XZUtils$CachedAvailability;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): XZUtils$CachedAvailability;
    static values(): (Object | null)[];
    private constructor()
    name(): "DONT_CACHE" | "CACHED_AVAILABLE" | "CACHED_UNAVAILABLE";
}