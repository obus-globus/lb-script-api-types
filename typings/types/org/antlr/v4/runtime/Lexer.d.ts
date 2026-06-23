import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { IntStream } from '../../../../org/antlr/v4/runtime/IntStream.d.ts'
import type { LexerNoViableAltException } from '../../../../org/antlr/v4/runtime/LexerNoViableAltException.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { Recognizer } from '../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenFactory } from '../../../../org/antlr/v4/runtime/TokenFactory.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
import type { LexerATNSimulator } from '../../../../org/antlr/v4/runtime/atn/LexerATNSimulator.d.ts'
import type { IntegerStack } from '../../../../org/antlr/v4/runtime/misc/IntegerStack.d.ts'
import type { Pair } from '../../../../org/antlr/v4/runtime/misc/Pair.d.ts'
export abstract class Lexer extends Recognizer<number, LexerATNSimulator> implements TokenSource {
    static DEFAULT_MODE: number;
    static DEFAULT_TOKEN_CHANNEL: number;
    static EOF: number;
    static HIDDEN: number;
    static MAX_CHAR_VALUE: number;
    static MIN_CHAR_VALUE: number;
    static MORE: number;
    static SKIP: number;
    constructor()
    constructor(arg0: CharStream)
    _channel: number;
    // private _factory: TokenFactory<any>;
    _hitEOF: boolean;
    _input: CharStream;
    _mode: number;
    _modeStack: IntegerStack;
    _text: string;
    _token: Token;
    // private _tokenFactorySourcePair: Pair<TokenSource, CharStream>;
    _tokenStartCharIndex: number;
    _tokenStartCharPositionInLine: number;
    _tokenStartLine: number;
    _type: number;
    emit(): Token;
    emit(arg0: Token): void;
    emitEOF(): Token;
    getAllTokens(): Token[];
    getChannel(): number;
    getChannelNames(): string[];
    getCharErrorDisplay(arg0: number): string;
    getCharIndex(): number;
    getCharPositionInLine(): number;
    getErrorDisplay(arg0: number): string;
    getErrorDisplay(arg0: string): string;
    getInputStream(): CharStream;
    getLine(): number;
    getModeNames(): string[];
    getSourceName(): string;
    getText(): string;
    getToken(): Token;
    getTokenFactory(): TokenFactory<Token>;
    getTokenNames(): string[];
    getType(): number;
    mode(arg0: number): void;
    more(): void;
    nextToken(): Token;
    notifyListeners(arg0: LexerNoViableAltException): void;
    popMode(): number;
    pushMode(arg0: number): void;
    recover(arg0: LexerNoViableAltException): void;
    recover(arg0: RecognitionException): void;
    reset(): void;
    setChannel(arg0: number): void;
    setCharPositionInLine(arg0: number): void;
    setInputStream(arg0: IntStream): void;
    setLine(arg0: number): void;
    setText(arg0: string): void;
    setToken(arg0: Token): void;
    setTokenFactory(arg0: TokenFactory<any>): void;
    setType(arg0: number): void;
    skip(): void;
}