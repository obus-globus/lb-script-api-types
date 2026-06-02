import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$IndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$IndexOfCodePointNode.d.ts'
export class TruffleStringFactory$IndexOfCodePointNodeGen extends TruffleString$IndexOfCodePointNode {
    static create(): TruffleString$IndexOfCodePointNode;
    static getUncached(): TruffleString$IndexOfCodePointNode;
    private constructor()
    // private indexOfNode__field2_: number;
    // private state_0_: number;
    // private state_1_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: TruffleString$Encoding): number;
}