import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BrotliUtils$CachedAvailability extends Enum<BrotliUtils$CachedAvailability> {
    static CACHED_AVAILABLE: BrotliUtils$CachedAvailability;
    static CACHED_UNAVAILABLE: BrotliUtils$CachedAvailability;
    static DONT_CACHE: BrotliUtils$CachedAvailability;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BrotliUtils$CachedAvailability;
    static values(): BrotliUtils$CachedAvailability[];
    private constructor()
    name(): "DONT_CACHE" | "CACHED_AVAILABLE" | "CACHED_UNAVAILABLE";
}