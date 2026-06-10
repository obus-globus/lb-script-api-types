import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Lexer } from '../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { Vocabulary } from '../../../../org/antlr/v4/runtime/Vocabulary.d.ts'
import type { ATN } from '../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { PredictionContextCache } from '../../../../org/antlr/v4/runtime/atn/PredictionContextCache.d.ts'
import type { DFA } from '../../../../org/antlr/v4/runtime/dfa/DFA.d.ts'
export class LexerInterpreter extends Lexer {
    static DEFAULT_MODE: number;
    static DEFAULT_TOKEN_CHANNEL: number;
    static EOF: number;
    static HIDDEN: number;
    static MAX_CHAR_VALUE: number;
    static MIN_CHAR_VALUE: number;
    static MORE: number;
    static SKIP: number;
    constructor(arg0: string, arg1: string[], arg2: string[], arg3: string[], arg4: ATN, arg5: CharStream)
    constructor(arg0: string, arg1: Vocabulary, arg2: string[], arg3: string[], arg4: string[], arg5: ATN, arg6: CharStream)
    constructor(arg0: string, arg1: Vocabulary, arg2: string[], arg3: string[], arg4: ATN, arg5: CharStream)
    // private _decisionToDFA: DFA[];
    // private _sharedContextCache: PredictionContextCache;
    // private atn: ATN;
    readonly channelNames: string[];
    readonly grammarFileName: string;
    readonly modeNames: string[];
    readonly ruleNames: string[];
    readonly tokenNames: string[];
    readonly vocabulary: Vocabulary;
    getATN(): ATN;
    getChannelNames(): string[];
    getGrammarFileName(): string;
    getModeNames(): string[];
    getRuleNames(): string[];
    getTokenNames(): string[];
    getVocabulary(): Vocabulary;
}