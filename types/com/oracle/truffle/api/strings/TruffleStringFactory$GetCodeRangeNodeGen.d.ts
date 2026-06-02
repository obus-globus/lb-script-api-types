import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$GetCodeRangeNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$GetCodeRangeNode.d.ts'
export class TruffleStringFactory$GetCodeRangeNodeGen extends TruffleString$GetCodeRangeNode {
    static create(): TruffleString$GetCodeRangeNode;
    static getUncached(): TruffleString$GetCodeRangeNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): TruffleString$CodeRange;
}