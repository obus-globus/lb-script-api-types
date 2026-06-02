import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ASTParser$ASTCacheStrategy extends Enum<ASTParser$ASTCacheStrategy> {
    static ALL: ASTParser$ASTCacheStrategy;
    static ALL_EXCLUDING_TRANSLATION_UNIT: ASTParser$ASTCacheStrategy;
    static NONE: ASTParser$ASTCacheStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ASTParser$ASTCacheStrategy;
    static values(): (Object | null)[];
    private constructor()
    name(): "ALL" | "ALL_EXCLUDING_TRANSLATION_UNIT" | "NONE";
}