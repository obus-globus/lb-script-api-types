import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
export interface WritableToken extends Object, Token{
    setChannel(arg0: number): void;
    setCharPositionInLine(arg0: number): void;
    setLine(arg0: number): void;
    setText(arg0: string): void;
    setTokenIndex(arg0: number): void;
    setType(arg0: number): void;
}