import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$ByteIndexOfAnyByteNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfAnyByteNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$ByteIndexOfAnyByteNodeGen extends TruffleString$ByteIndexOfAnyByteNode {
    static create(): TruffleString$ByteIndexOfAnyByteNode;
    static getUncached(): TruffleString$ByteIndexOfAnyByteNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: number[], arg4Value: TruffleString$Encoding): number;
}