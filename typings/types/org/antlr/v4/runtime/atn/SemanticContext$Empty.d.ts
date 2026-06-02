import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Recognizer } from '../../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { SemanticContext } from '../../../../../org/antlr/v4/runtime/atn/SemanticContext.d.ts'
export class SemanticContext$Empty extends SemanticContext {
    static Instance: SemanticContext$Empty;
    static and(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    static or(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    constructor()
    eval(arg0: Recognizer<Object, Object>, arg1: RuleContext): boolean;
}