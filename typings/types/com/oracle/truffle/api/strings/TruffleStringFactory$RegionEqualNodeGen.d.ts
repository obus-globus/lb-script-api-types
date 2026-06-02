import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$RegionEqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$RegionEqualNode.d.ts'
export class TruffleStringFactory$RegionEqualNodeGen extends TruffleString$RegionEqualNode {
    static create(): TruffleString$RegionEqualNode;
    static getUncached(): TruffleString$RegionEqualNode;
    private constructor()
    // private regionEqualsNode__field2_: number;
    // private regionEqualsNode__field3_: number;
    // private state_0_: number;
    // private state_1_: number;
    // private state_2_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: AbstractTruffleString, arg3Value: number, arg4Value: number, arg5Value: TruffleString$Encoding): boolean;
}