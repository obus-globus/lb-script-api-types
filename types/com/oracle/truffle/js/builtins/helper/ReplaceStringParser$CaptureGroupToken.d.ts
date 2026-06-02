import type { ReplaceStringParser$Token } from '../../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Token.d.ts'
export class ReplaceStringParser$CaptureGroupToken extends ReplaceStringParser$Token {
    constructor(groupNumber: number, literalStart: number, literalEnd: number)
    readonly groupNumber: number;
    readonly literalEnd: number;
    readonly literalStart: number;
    getGroupNumber(): number;
    getLiteralEnd(): number;
    getLiteralStart(): number;
}