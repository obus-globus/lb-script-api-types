import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$ByteIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$ByteIndexOfCodePointNodeGen extends TruffleString$ByteIndexOfCodePointNode {
    static create(): TruffleString$ByteIndexOfCodePointNode;
    static getUncached(): TruffleString$ByteIndexOfCodePointNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: TruffleString$Encoding): number;
}