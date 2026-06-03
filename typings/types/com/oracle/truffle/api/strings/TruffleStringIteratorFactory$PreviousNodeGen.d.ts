import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleStringIterator } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator.d.ts'
import type { TruffleStringIterator$PreviousNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator$PreviousNode.d.ts'
export class TruffleStringIteratorFactory$PreviousNodeGen extends TruffleStringIterator$PreviousNode {
    static create(): TruffleStringIterator$PreviousNode;
    static getUncached(): TruffleStringIterator$PreviousNode;
    private constructor()
    // private previousNode__field1_: number;
    // private state_0_: number;
    execute(it: TruffleStringIterator): number;
    execute(arg0Value: TruffleStringIterator, arg1Value: TruffleString$Encoding): number;
}