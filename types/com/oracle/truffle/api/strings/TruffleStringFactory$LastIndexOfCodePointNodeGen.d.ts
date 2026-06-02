import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$LastIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$LastIndexOfCodePointNode.d.ts'
export class TruffleStringFactory$LastIndexOfCodePointNodeGen extends TruffleString$LastIndexOfCodePointNode {
    static create(): TruffleString$LastIndexOfCodePointNode;
    static getUncached(): TruffleString$LastIndexOfCodePointNode;
    private constructor()
    // private lastIndexOfNode__field2_: number;
    // private state_0_: number;
    // private state_1_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: TruffleString$Encoding): number;
}