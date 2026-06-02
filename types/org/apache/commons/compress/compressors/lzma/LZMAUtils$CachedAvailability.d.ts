import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LZMAUtils$CachedAvailability extends Enum<LZMAUtils$CachedAvailability> {
    static CACHED_AVAILABLE: LZMAUtils$CachedAvailability;
    static CACHED_UNAVAILABLE: LZMAUtils$CachedAvailability;
    static DONT_CACHE: LZMAUtils$CachedAvailability;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LZMAUtils$CachedAvailability;
    static values(): (Object | null)[];
    private constructor()
    name(): "DONT_CACHE" | "CACHED_AVAILABLE" | "CACHED_UNAVAILABLE";
}