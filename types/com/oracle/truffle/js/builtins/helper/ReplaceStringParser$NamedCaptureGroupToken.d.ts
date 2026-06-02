import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ReplaceStringParser$Token } from '../../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Token.d.ts'
export class ReplaceStringParser$NamedCaptureGroupToken extends ReplaceStringParser$Token {
    constructor(groupName: TruffleString)
    // private groupNameStr: TruffleString;
    getGroupName(): TruffleString;
}