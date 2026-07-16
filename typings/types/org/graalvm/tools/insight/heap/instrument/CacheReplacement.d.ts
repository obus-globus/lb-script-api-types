import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CacheReplacement extends Enum<CacheReplacement> {
    static FLUSH: CacheReplacement;
    static LRU: CacheReplacement;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CacheReplacement;
    static values(): CacheReplacement[];
    private constructor()
    name(): "FLUSH" | "LRU";
}