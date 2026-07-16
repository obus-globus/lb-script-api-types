import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ASTInjectionPoint extends Enum<ASTInjectionPoint> {
    static BEFORE_ALL: ASTInjectionPoint;
    static BEFORE_DECLARATIONS: ASTInjectionPoint;
    static BEFORE_FUNCTIONS: ASTInjectionPoint;
    static END: ASTInjectionPoint;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ASTInjectionPoint;
    static values(): ASTInjectionPoint[];
    private constructor()
    checkChildRelevant(arg0: Class<Object>): boolean;
    getInjectionIndex(arg0: TranslationUnit): number;
    name(): "BEFORE_ALL" | "BEFORE_DECLARATIONS" | "BEFORE_FUNCTIONS" | "END";
}