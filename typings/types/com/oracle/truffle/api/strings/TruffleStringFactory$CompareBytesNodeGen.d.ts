import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CompareBytesNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CompareBytesNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$CompareBytesNodeGen extends TruffleString$CompareBytesNode {
    static create(): TruffleString$CompareBytesNode;
    static getUncached(): TruffleString$CompareBytesNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: TruffleString$Encoding): number;
}