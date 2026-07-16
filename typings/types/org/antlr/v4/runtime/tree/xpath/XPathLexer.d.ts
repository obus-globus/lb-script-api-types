import type { CharStream } from '../../../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Lexer } from '../../../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { Token } from '../../../../../../org/antlr/v4/runtime/Token.d.ts'
import type { Vocabulary } from '../../../../../../org/antlr/v4/runtime/Vocabulary.d.ts'
import type { ATN } from '../../../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
export class XPathLexer extends Lexer {
    static ANYWHERE: number;
    static BANG: number;
    static DEFAULT_MODE: number;
    static DEFAULT_TOKEN_CHANNEL: number;
    static EOF: number;
    static HIDDEN: number;
    static ID: number;
    static MAX_CHAR_VALUE: number;
    static MIN_CHAR_VALUE: number;
    static MORE: number;
    static ROOT: number;
    static RULE_REF: number;
    static SKIP: number;
    static STRING: number;
    static TOKEN_REF: number;
    static VOCABULARY: Vocabulary;
    static WILDCARD: number;
    static modeNames: string[];
    static ruleNames: string[];
    static tokenNames: string[];
    constructor(arg0: CharStream)
    charPositionInLine: number;
    line: number;
    consume(): void;
    getATN(): ATN;
    getCharPositionInLine(): number;
    getGrammarFileName(): string;
    getModeNames(): string[];
    getRuleNames(): string[];
    getTokenNames(): string[];
    getVocabulary(): Vocabulary;
    isNameChar(arg0: number): boolean;
    isNameStartChar(arg0: number): boolean;
    matchID(): string;
    matchString(): string;
    nextToken(): Token;
}