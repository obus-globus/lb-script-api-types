import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
export abstract class TruffleStringBuilder$ToStringIntlNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, sb: TruffleStringBuilder, lazy: boolean): TruffleString;
}