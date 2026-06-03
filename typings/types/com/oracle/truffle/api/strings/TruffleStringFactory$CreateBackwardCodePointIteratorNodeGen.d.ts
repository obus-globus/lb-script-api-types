import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CreateBackwardCodePointIteratorNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CreateBackwardCodePointIteratorNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
import type { TruffleStringIterator } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator.d.ts'
export class TruffleStringFactory$CreateBackwardCodePointIteratorNodeGen extends TruffleString$CreateBackwardCodePointIteratorNode {
    static create(): TruffleString$CreateBackwardCodePointIteratorNode;
    static getUncached(): TruffleString$CreateBackwardCodePointIteratorNode;
    private constructor()
    // private state_0_: number;
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): TruffleStringIterator;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: TruffleString$ErrorHandling): TruffleStringIterator;
}