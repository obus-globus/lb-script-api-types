import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
export interface Token extends Object{
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
}