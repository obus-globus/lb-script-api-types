import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TranscodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler.d.ts'
import type { TranscodingErrorHandler$ReplacementString } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler$ReplacementString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
export class TruffleStringFactory$SwitchEncodingNodeGen extends TruffleString$SwitchEncodingNode {
    static create(): TruffleString$SwitchEncodingNode;
    static getUncached(): TruffleString$SwitchEncodingNode;
    private constructor()
    // private internalNode__field6_: number;
    // private internalNode__field7_: number;
    // private state_0_: number;
    // private state_1_: number;
    // private state_2_: number;
    // private state_3_: number;
    // private state_4_: number;
    // private state_5_: number;
    execute(a: AbstractTruffleString, encoding: TruffleString$Encoding): TruffleString;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => TranscodingErrorHandler$ReplacementString): TruffleString;
}