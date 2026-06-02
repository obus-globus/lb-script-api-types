import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$ByteIndexToCodePointIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexToCodePointIndexNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$ByteIndexToCodePointIndexNodeGen extends TruffleString$ByteIndexToCodePointIndexNode {
    static create(): TruffleString$ByteIndexToCodePointIndexNode;
    static getUncached(): TruffleString$ByteIndexToCodePointIndexNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding): number;
}