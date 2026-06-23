import type { CharStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CharStream.d.ts'
import type { Recognizer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { TokenSource } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenSource.d.ts'
import type { WritableToken } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/WritableToken.d.ts'
import type { Pair } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Pair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CommonToken extends Object implements WritableToken, Serializable {
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
    setCharPositionInLine(arg0: number): void;
    setLine(arg0: number): void;
    setText(arg0: string): void;
    setTokenIndex(arg0: number): void;
    toString(): string;
    toString(arg0: Recognizer<Object, any>): string;
}