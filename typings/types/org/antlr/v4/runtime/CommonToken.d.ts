import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Recognizer } from '../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
import type { WritableToken } from '../../../../org/antlr/v4/runtime/WritableToken.d.ts'
import type { Pair } from '../../../../org/antlr/v4/runtime/misc/Pair.d.ts'
export class CommonToken extends Object implements Serializable, WritableToken {
    static DEFAULT_CHANNEL: number;
    static EOF: number;
    static EPSILON: number;
    static HIDDEN_CHANNEL: number;
    static INVALID_TYPE: number;
    static MIN_USER_CHANNEL_VALUE: number;
    static MIN_USER_TOKEN_TYPE: number;
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    constructor(arg0: Token)
    constructor(arg0: Pair<TokenSource, CharStream>, arg1: number, arg2: number, arg3: number, arg4: number)
    channel: number;
    charPositionInLine: number;
    // private index: number;
    line: number;
    // private source: Pair<TokenSource, CharStream>;
    // private start: number;
    // private stop: number;
    text: string;
    type: number;
    getChannel(): number;
    getCharPositionInLine(): number;
    getInputStream(): CharStream;
    getLine(): number;
    getStartIndex(): number;
    getStopIndex(): number;
    getText(): string;
    getTokenIndex(): number;
    getTokenSource(): TokenSource;
    getType(): number;
    setChannel(arg0: number): void;
    setCharPositionInLine(arg0: number): void;
    setLine(arg0: number): void;
    setStartIndex(arg0: number): void;
    setStopIndex(arg0: number): void;
    setText(arg0: string): void;
    setTokenIndex(arg0: number): void;
    setType(arg0: number): void;
    toString(): string;
    toString(arg0: Recognizer<Object, Object>): string;
}