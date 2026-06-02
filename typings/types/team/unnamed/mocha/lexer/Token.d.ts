import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TokenKind } from '../../../../team/unnamed/mocha/lexer/TokenKind.d.ts'
export class Token extends Object {
    constructor(arg0: TokenKind, arg1: string, arg2: number, arg3: number)
    // private end: number;
    // private kind: TokenKind;
    // private start: number;
    // private value: string;
    end(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    kind(): TokenKind;
    start(): number;
    toString(): string;
    value(): string;
}