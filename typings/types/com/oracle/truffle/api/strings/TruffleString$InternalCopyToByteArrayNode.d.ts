import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$InternalCopyToByteArrayNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, a: AbstractTruffleString, byteFromIndexA: number, dst: number[], byteFromIndexDst: number, byteLength: number, expectedEncoding: TruffleString$Encoding): void;
}