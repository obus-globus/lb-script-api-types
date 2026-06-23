import type { Recognizer } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { SemanticContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/SemanticContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export class SemanticContext$PrecedencePredicate extends SemanticContext implements Comparable<SemanticContext$PrecedencePredicate> {
    static and(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    static or(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    constructor()
    constructor(arg0: number)
    precedence: number;
    compareTo(arg0: SemanticContext$PrecedencePredicate): number;
    equals(arg0: Object | null): boolean;
    eval(arg0: Recognizer<Object, any>, arg1: RuleContext): boolean;
    evalPrecedence(arg0: Recognizer<Object, any>, arg1: RuleContext): SemanticContext;
    hashCode(): number;
    toString(): string;
}