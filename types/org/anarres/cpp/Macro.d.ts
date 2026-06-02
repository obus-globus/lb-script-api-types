import type { Object } from '../../../java/lang/Object.d.ts'
import type { Token } from '../../../org/anarres/cpp/Token.d.ts'
export class Macro extends Object {
    constructor(arg0: string)
    constructor(arg0: Token[], arg1: string)
    readonly args: string[];
    readonly name: string;
    readonly source: Token[];
    // private tokens: Token[];
    readonly variadic: boolean;
    addPaste(arg0: Token): void;
    addToken(arg0: Token): void;
    getArgs(): number;
    getName(): string;
    getSource(): Token[];
    getText(): string;
    getTokens(): Token[];
    isFunctionLike(): boolean;
    isVariadic(): boolean;
    setArgs(arg0: string[]): void;
    setSource(arg0: Token[]): void;
    setVariadic(arg0: boolean): void;
    toString(): string;
}