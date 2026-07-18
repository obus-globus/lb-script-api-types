import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
export abstract class TStringOpsNodes$IndexOfAnyCharUTF16Node extends AbstractInternalNode {
    constructor()
    execute(node: Node, a: AbstractTruffleString, arrayA: number[], offsetA: number, fromIndex: number, maxIndex: number, values: string[]): number;
    stride0(a: AbstractTruffleString, arrayA: number[], offsetA: number, fromIndex: number, maxIndex: number, values: string[]): number;
    stride0MultiValue(a: AbstractTruffleString, arrayA: number[], offsetA: number, fromIndex: number, maxIndex: number, values: string[]): number;
    stride1(a: AbstractTruffleString, arrayA: number[], offsetA: number, fromIndex: number, maxIndex: number, values: string[]): number;
}