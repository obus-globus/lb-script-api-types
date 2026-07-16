import type { CharStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CharStream.d.ts'
import type { Lexer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Lexer.d.ts'
import type { RuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { Vocabulary } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Vocabulary.d.ts'
import type { ATN } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATN.d.ts'
export class ExpressionLexer extends Lexer {
    static VOCABULARY: Vocabulary;
    static _ATN: ATN;
    static channelNames: string[];
    static modeNames: string[];
    static ruleNames: string[];
    static tokenNames: string[];
    constructor(arg0: CharStream)
    // private IntLit_action(arg0: RuleContext, arg1: number): void;
    // private StringLit_action(arg0: RuleContext, arg1: number): void;
    action(arg0: RuleContext, arg1: number, arg2: number): void;
    getATN(): ATN;
    getRuleNames(): string[];
    getTokenNames(): string[];
    getVocabulary(): Vocabulary;
}