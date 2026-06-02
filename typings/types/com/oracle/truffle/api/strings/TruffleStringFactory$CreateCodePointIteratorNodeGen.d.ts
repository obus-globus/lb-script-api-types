import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CreateCodePointIteratorNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CreateCodePointIteratorNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
import type { TruffleStringIterator } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator.d.ts'
export class TruffleStringFactory$CreateCodePointIteratorNodeGen extends TruffleString$CreateCodePointIteratorNode {
    static create(): TruffleString$CreateCodePointIteratorNode;
    static getUncached(): TruffleString$CreateCodePointIteratorNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: TruffleString$ErrorHandling): TruffleStringIterator;
}