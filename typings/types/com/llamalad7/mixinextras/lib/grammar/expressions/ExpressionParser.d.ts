import type { Parser } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Parser.d.ts'
import type { RuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { TokenStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenStream.d.ts'
import type { Vocabulary } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Vocabulary.d.ts'
import type { ATN } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATN.d.ts'
import type { ExpressionParser$ArgumentsContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ArgumentsContext.d.ts'
import type { ExpressionParser$ExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ExpressionContext.d.ts'
import type { ExpressionParser$NameContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NameContext.d.ts'
import type { ExpressionParser$NameWithDimsContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NameWithDimsContext.d.ts'
import type { ExpressionParser$NonEmptyArgumentsContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NonEmptyArgumentsContext.d.ts'
import type { ExpressionParser$RootContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$RootContext.d.ts'
import type { ExpressionParser$StatementContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$StatementContext.d.ts'
export class ExpressionParser extends Parser {
    static VOCABULARY: Vocabulary;
    static _ATN: ATN;
    static ruleNames: string[];
    static tokenNames: string[];
    constructor(arg0: TokenStream)
    arguments(): ExpressionParser$ArgumentsContext;
    // private expression(arg0: number): ExpressionParser$ExpressionContext;
    // private expression_sempred(arg0: ExpressionParser$ExpressionContext, arg1: number): boolean;
    getATN(): ATN;
    getRuleNames(): string[];
    getTokenNames(): string[];
    getVocabulary(): Vocabulary;
    name(): ExpressionParser$NameContext;
    nameWithDims(): ExpressionParser$NameWithDimsContext;
    nonEmptyArguments(): ExpressionParser$NonEmptyArgumentsContext;
    root(): ExpressionParser$RootContext;
    sempred(arg0: RuleContext, arg1: number, arg2: number): boolean;
    statement(): ExpressionParser$StatementContext;
}