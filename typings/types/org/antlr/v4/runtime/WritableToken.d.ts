import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
export interface WritableToken extends Object, Token{
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
    setText(arg0: string): void;
    setTokenIndex(arg0: number): void;
    setType(arg0: number): void;
}