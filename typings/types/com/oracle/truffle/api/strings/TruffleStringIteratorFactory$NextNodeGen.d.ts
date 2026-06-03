import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleStringIterator } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator.d.ts'
import type { TruffleStringIterator$NextNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator$NextNode.d.ts'
export class TruffleStringIteratorFactory$NextNodeGen extends TruffleStringIterator$NextNode {
    static create(): TruffleStringIterator$NextNode;
    static getUncached(): TruffleStringIterator$NextNode;
    private constructor()
    // private nextNode__field1_: number;
    // private state_0_: number;
    execute(it: TruffleStringIterator): number;
    execute(arg0Value: TruffleStringIterator, arg1Value: TruffleString$Encoding): number;
}