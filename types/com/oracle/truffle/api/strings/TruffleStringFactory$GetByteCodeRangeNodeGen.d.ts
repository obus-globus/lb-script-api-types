import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$GetByteCodeRangeNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$GetByteCodeRangeNode.d.ts'
export class TruffleStringFactory$GetByteCodeRangeNodeGen extends TruffleString$GetByteCodeRangeNode {
    static create(): TruffleString$GetByteCodeRangeNode;
    static getUncached(): TruffleString$GetByteCodeRangeNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): TruffleString$CodeRange;
}