import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Recognizer } from '../../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
export abstract class SemanticContext extends Object {
    static and(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    static or(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    constructor()
    eval(arg0: Recognizer<Object, any>, arg1: RuleContext): boolean;
    evalPrecedence(arg0: Recognizer<Object, any>, arg1: RuleContext): SemanticContext;
}