import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ASTParser$ParsingCacheStrategy extends Enum<ASTParser$ParsingCacheStrategy> {
    static ALL: ASTParser$ParsingCacheStrategy;
    static ALL_EXCLUDING_TRANSLATION_UNIT: ASTParser$ParsingCacheStrategy;
    static NONE: ASTParser$ParsingCacheStrategy;
    static TWO_TIER: ASTParser$ParsingCacheStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ASTParser$ParsingCacheStrategy;
    static values(): (Object | null)[];
    private constructor()
    name(): "ALL" | "TWO_TIER" | "ALL_EXCLUDING_TRANSLATION_UNIT" | "NONE";
}