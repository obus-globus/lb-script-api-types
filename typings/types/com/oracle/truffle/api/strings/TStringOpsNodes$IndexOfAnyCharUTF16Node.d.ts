import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
export abstract class TStringOpsNodes$IndexOfAnyCharUTF16Node extends AbstractInternalNode {
    constructor()
    execute(node: Node, arrayA: number[], offsetA: number, strideA: number, fromIndex: number, maxIndex: number, values: string[]): number;
    stride0(arrayA: number[], offsetA: number, strideA: number, fromIndex: number, maxIndex: number, values: string[]): number;
    stride0MultiValue(arrayA: number[], offsetA: number, strideA: number, fromIndex: number, maxIndex: number, values: string[]): number;
    stride1(arrayA: number[], offsetA: number, strideA: number, fromIndex: number, maxIndex: number, values: string[]): number;
}