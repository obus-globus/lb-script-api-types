import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { DecodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler.d.ts'
import type { DecodingErrorHandler$Result } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler$Result.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleStringIterator } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator.d.ts'
export abstract class TruffleStringIterator$InternalPreviousNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, it: TruffleStringIterator, encoding: TruffleString$Encoding, errorHandler: (param0: AbstractTruffleString, param1: number, param2: number) => DecodingErrorHandler$Result): number;
    executeInternal(node: Node, it: TruffleStringIterator, encoding: TruffleString$Encoding, errorHandler: (param0: AbstractTruffleString, param1: number, param2: number) => DecodingErrorHandler$Result): number;
}