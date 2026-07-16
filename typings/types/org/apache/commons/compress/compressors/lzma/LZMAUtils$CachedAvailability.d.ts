import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LZMAUtils$CachedAvailability extends Enum<LZMAUtils$CachedAvailability> {
    static CACHED_AVAILABLE: LZMAUtils$CachedAvailability;
    static CACHED_UNAVAILABLE: LZMAUtils$CachedAvailability;
    static DONT_CACHE: LZMAUtils$CachedAvailability;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LZMAUtils$CachedAvailability;
    static values(): LZMAUtils$CachedAvailability[];
    private constructor()
    name(): "DONT_CACHE" | "CACHED_AVAILABLE" | "CACHED_UNAVAILABLE";
}