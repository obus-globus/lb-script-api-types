import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ASTParser$ASTCacheStrategy extends Enum<ASTParser$ASTCacheStrategy> {
    static ALL: ASTParser$ASTCacheStrategy;
    static ALL_EXCLUDING_TRANSLATION_UNIT: ASTParser$ASTCacheStrategy;
    static NONE: ASTParser$ASTCacheStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ASTParser$ASTCacheStrategy;
    static values(): ASTParser$ASTCacheStrategy[];
    private constructor()
    name(): "ALL" | "ALL_EXCLUDING_TRANSLATION_UNIT" | "NONE";
}