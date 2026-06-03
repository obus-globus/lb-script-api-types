import type { InterpreterRuleContext } from '../../../../org/antlr/v4/runtime/InterpreterRuleContext.d.ts'
import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenStream } from '../../../../org/antlr/v4/runtime/TokenStream.d.ts'
import type { Vocabulary } from '../../../../org/antlr/v4/runtime/Vocabulary.d.ts'
import type { ATN } from '../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { ATNState } from '../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { DecisionState } from '../../../../org/antlr/v4/runtime/atn/DecisionState.d.ts'
import type { PredictionContextCache } from '../../../../org/antlr/v4/runtime/atn/PredictionContextCache.d.ts'
import type { DFA } from '../../../../org/antlr/v4/runtime/dfa/DFA.d.ts'
import type { Pair } from '../../../../org/antlr/v4/runtime/misc/Pair.d.ts'
export class ParserInterpreter extends Parser {
    static EOF: number;
    constructor(arg0: string, arg1: E[], arg2: E[], arg3: ATN, arg4: TokenStream)
    constructor(arg0: string, arg1: Vocabulary, arg2: E[], arg3: ATN, arg4: TokenStream)
    // private _parentContextStack: Pair<ParserRuleContext, number>[];
    // private atn: ATN;
    // private decisionToDFA: DFA[];
    readonly grammarFileName: string;
    // private overrideDecision: number;
    // private overrideDecisionAlt: number;
    // private overrideDecisionInputIndex: number;
    // private overrideDecisionReached: boolean;
    overrideDecisionRoot: InterpreterRuleContext;
    rootContext: InterpreterRuleContext;
    readonly ruleNames: string[];
    // private sharedContextCache: PredictionContextCache;
    readonly tokenNames: string[];
    readonly vocabulary: Vocabulary;
    addDecisionOverride(arg0: number, arg1: number, arg2: number): void;
    createInterpreterRuleContext(arg0: ParserRuleContext, arg1: number, arg2: number): InterpreterRuleContext;
    enterRecursionRule(arg0: ParserRuleContext, arg1: number): void;
    enterRecursionRule(arg0: ParserRuleContext, arg1: number, arg2: number, arg3: number): void;
    getATN(): ATN;
    getATNState(): ATNState;
    getGrammarFileName(): string;
    getOverrideDecisionRoot(): InterpreterRuleContext;
    getRootContext(): InterpreterRuleContext;
    getRuleNames(): string[];
    getTokenNames(): string[];
    getVocabulary(): Vocabulary;
    parse(arg0: number): ParserRuleContext;
    recover(arg0: RecognitionException): void;
    recoverInline(): Token;
    reset(): void;
    visitDecisionState(arg0: DecisionState): number;
    visitRuleStopState(arg0: ATNState): void;
    visitState(arg0: ATNState): void;
}