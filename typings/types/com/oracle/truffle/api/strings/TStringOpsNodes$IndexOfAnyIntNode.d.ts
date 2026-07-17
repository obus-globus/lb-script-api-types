import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
export abstract class TStringOpsNodes$IndexOfAnyIntNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, arrayA: number[], offsetA: number, strideA: number, fromIndex: number, maxIndex: number, values: number[]): number;
    stride0(arrayA: number[], offsetA: number, strideA: number, fromIndex: number, maxIndex: number, values: number[]): number;
    stride0MultiValue(arrayA: number[], offsetA: number, strideA: number, fromIndex: number, maxIndex: number, values: number[]): number;
    stride1(arrayA: number[], offsetA: number, strideA: number, fromIndex: number, maxIndex: number, values: number[]): number;
    stride1MultiValue(arrayA: number[], offsetA: number, strideA: number, fromIndex: number, maxIndex: number, values: number[]): number;
    stride2(arrayA: number[], offsetA: number, strideA: number, fromIndex: number, maxIndex: number, values: number[]): number;
}