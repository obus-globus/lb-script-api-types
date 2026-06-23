import type { CharStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CharStream.d.ts'
import type { LexerNoViableAltException } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/LexerNoViableAltException.d.ts'
import type { Recognizer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { TokenFactory } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenFactory.d.ts'
import type { TokenSource } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenSource.d.ts'
import type { LexerATNSimulator } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerATNSimulator.d.ts'
import type { IntegerStack } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntegerStack.d.ts'
import type { Pair } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Pair.d.ts'
export abstract class Lexer extends Recognizer<number, LexerATNSimulator> implements TokenSource {
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
    getCharIndex(): number;
    getCharPositionInLine(): number;
    getErrorDisplay(arg0: number): string;
    getErrorDisplay(arg0: string): string;
    getInputStream(): CharStream;
    getLine(): number;
    getText(): string;
    getTokenFactory(): TokenFactory<Token>;
    getTokenNames(): string[];
    mode(arg0: number): void;
    more(): void;
    nextToken(): Token;
    notifyListeners(arg0: LexerNoViableAltException): void;
    popMode(): number;
    pushMode(arg0: number): void;
    recover(arg0: LexerNoViableAltException): void;
    setChannel(arg0: number): void;
    setText(arg0: string): void;
    setType(arg0: number): void;
    skip(): void;
}