import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { TokenSource } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenSource.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface WritableToken extends Token, Object{
    getChannel(): number;
    getCharPositionInLine(): number;
    getLine(): number;
    getStartIndex(): number;
    getStopIndex(): number;
    getText(): string;
    getTokenIndex(): number;
    getTokenSource(): TokenSource;
    getType(): number;
    setTokenIndex(arg0: number): void;
}