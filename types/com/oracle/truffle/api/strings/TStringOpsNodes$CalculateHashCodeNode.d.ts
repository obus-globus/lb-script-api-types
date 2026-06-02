import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
export abstract class TStringOpsNodes$CalculateHashCodeNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, a: AbstractTruffleString, arrayA: number[], offsetA: number): number;
}