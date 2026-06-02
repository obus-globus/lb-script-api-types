import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleStringIterator } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator.d.ts'
import type { TruffleStringIterator$InternalNextNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator$InternalNextNode.d.ts'
export abstract class TruffleStringIterator$NextNode extends AbstractPublicNode {
    static create(): TruffleStringIterator$NextNode;
    static getUncached(): TruffleStringIterator$NextNode;
    constructor()
    doDefault(it: TruffleStringIterator, encoding: TruffleString$Encoding, nextNode: TruffleStringIterator$InternalNextNode): number;
    execute(it: TruffleStringIterator): number;
    execute(it: TruffleStringIterator, encoding: TruffleString$Encoding): number;
}