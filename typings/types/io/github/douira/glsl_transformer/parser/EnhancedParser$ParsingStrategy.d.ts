import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class EnhancedParser$ParsingStrategy extends Enum<EnhancedParser$ParsingStrategy> {
    static LL_ONLY: EnhancedParser$ParsingStrategy;
    static SLL_AND_LL_ON_ERROR: EnhancedParser$ParsingStrategy;
    static SLL_ONLY: EnhancedParser$ParsingStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EnhancedParser$ParsingStrategy;
    static values(): (Object | null)[];
    private constructor()
    name(): "SLL_AND_LL_ON_ERROR" | "SLL_ONLY" | "LL_ONLY";
}