import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$LastByteIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$LastByteIndexOfCodePointNode.d.ts'
export class TruffleStringFactory$LastByteIndexOfCodePointNodeGen extends TruffleString$LastByteIndexOfCodePointNode {
    static create(): TruffleString$LastByteIndexOfCodePointNode;
    static getUncached(): TruffleString$LastByteIndexOfCodePointNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: TruffleString$Encoding): number;
}