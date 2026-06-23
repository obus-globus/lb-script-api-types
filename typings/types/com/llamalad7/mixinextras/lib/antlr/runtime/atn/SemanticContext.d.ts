import type { Recognizer } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class SemanticContext extends Object {
    static and(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    static or(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    constructor()
    eval(arg0: Recognizer<Object, any>, arg1: RuleContext): boolean;
    evalPrecedence(arg0: Recognizer<Object, any>, arg1: RuleContext): SemanticContext;
}