import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleStringIterator } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator.d.ts'
import type { TruffleStringIterator$InternalPreviousNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator$InternalPreviousNode.d.ts'
export abstract class TruffleStringIterator$PreviousNode extends AbstractPublicNode {
    static create(): TruffleStringIterator$PreviousNode;
    static getUncached(): TruffleStringIterator$PreviousNode;
    constructor()
    doDefault(it: TruffleStringIterator, encoding: TruffleString$Encoding, previousNode: TruffleStringIterator$InternalPreviousNode): number;
    execute(it: TruffleStringIterator): number;
    execute(it: TruffleStringIterator, encoding: TruffleString$Encoding): number;
}