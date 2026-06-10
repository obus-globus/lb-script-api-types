import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Recognizer } from '../../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { SemanticContext } from '../../../../../org/antlr/v4/runtime/atn/SemanticContext.d.ts'
import type { SemanticContext$Operator } from '../../../../../org/antlr/v4/runtime/atn/SemanticContext$Operator.d.ts'
export class SemanticContext$OR extends SemanticContext$Operator {
    static and(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    static or(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    constructor(arg0: SemanticContext, arg1: SemanticContext)
    opnds: SemanticContext[];
    equals(arg0: Object | null): boolean;
    eval(arg0: Recognizer<Object, Object>, arg1: RuleContext): boolean;
    evalPrecedence(arg0: Recognizer<Object, Object>, arg1: RuleContext): SemanticContext;
    getOperands(): SemanticContext[];
    hashCode(): number;
    toString(): string;
}