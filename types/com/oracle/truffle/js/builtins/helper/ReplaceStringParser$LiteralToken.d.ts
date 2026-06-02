import type { ReplaceStringParser$Token } from '../../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Token.d.ts'
export class ReplaceStringParser$LiteralToken extends ReplaceStringParser$Token {
    constructor(start: number, end: number)
    readonly end: number;
    readonly start: number;
    getEnd(): number;
    getStart(): number;
}