import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Recognizer } from '../../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { SemanticContext } from '../../../../../org/antlr/v4/runtime/atn/SemanticContext.d.ts'
export class SemanticContext$Predicate extends SemanticContext {
    static and(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    static or(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    constructor()
    constructor(arg0: number, arg1: number, arg2: boolean)
    isCtxDependent: boolean;
    predIndex: number;
    ruleIndex: number;
    equals(arg0: Object | null): boolean;
    eval(arg0: Recognizer<Object, any>, arg1: RuleContext): boolean;
    hashCode(): number;
    toString(): string;
}