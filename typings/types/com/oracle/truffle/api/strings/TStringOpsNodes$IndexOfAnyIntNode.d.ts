import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
export abstract class TStringOpsNodes$IndexOfAnyIntNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, a: AbstractTruffleString, arrayA: number[], offsetA: number, fromIndex: number, maxIndex: number, values: number[]): number;
    stride0(a: AbstractTruffleString, arrayA: number[], offsetA: number, fromIndex: number, maxIndex: number, values: number[]): number;
    stride0MultiValue(a: AbstractTruffleString, arrayA: number[], offsetA: number, fromIndex: number, maxIndex: number, values: number[]): number;
    stride1(a: AbstractTruffleString, arrayA: number[], offsetA: number, fromIndex: number, maxIndex: number, values: number[]): number;
    stride1MultiValue(a: AbstractTruffleString, arrayA: number[], offsetA: number, fromIndex: number, maxIndex: number, values: number[]): number;
    stride2(a: AbstractTruffleString, arrayA: number[], offsetA: number, fromIndex: number, maxIndex: number, values: number[]): number;
}