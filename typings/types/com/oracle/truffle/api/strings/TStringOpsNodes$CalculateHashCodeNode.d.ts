import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
export abstract class TStringOpsNodes$CalculateHashCodeNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, arrayA: number[], offsetA: number, lengthA: number, strideA: number): number;
}