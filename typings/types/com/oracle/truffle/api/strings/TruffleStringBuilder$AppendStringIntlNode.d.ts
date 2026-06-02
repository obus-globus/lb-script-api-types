import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
export abstract class TruffleStringBuilder$AppendStringIntlNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, sb: TruffleStringBuilder, a: AbstractTruffleString): void;
}