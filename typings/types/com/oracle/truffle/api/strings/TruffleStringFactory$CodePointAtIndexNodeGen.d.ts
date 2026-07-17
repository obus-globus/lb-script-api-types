import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodePointAtIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointAtIndexNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
export class TruffleStringFactory$CodePointAtIndexNodeGen extends TruffleString$CodePointAtIndexNode {
    static create(): TruffleString$CodePointAtIndexNode;
    static getUncached(): TruffleString$CodePointAtIndexNode;
    private constructor()
    // private state_0_: number;
    execute(a: AbstractTruffleString, i: number, expectedEncoding: TruffleString$Encoding): number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: TruffleString$Encoding, arg3Value: TruffleString$ErrorHandling): number;
}