import type { Recognizer } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { SemanticContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/SemanticContext.d.ts'
import type { SemanticContext$Operator } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/SemanticContext$Operator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SemanticContext$OR extends SemanticContext$Operator {
    static and(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    static or(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    constructor(arg0: SemanticContext, arg1: SemanticContext)
    opnds: SemanticContext[];
    equals(arg0: Object | null): boolean;
    eval(arg0: Recognizer<Object, any>, arg1: RuleContext): boolean;
    evalPrecedence(arg0: Recognizer<Object, any>, arg1: RuleContext): SemanticContext;
    hashCode(): number;
    toString(): string;
}