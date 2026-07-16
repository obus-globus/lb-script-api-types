import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CacheReplacement extends Enum<CacheReplacement> {
    static FLUSH: CacheReplacement;
    static LRU: CacheReplacement;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CacheReplacement;
    static values(): CacheReplacement[];
    private constructor()
    name(): "FLUSH" | "LRU";
}