import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TStringInternalNodes$ConcatMaterializeBytesNode extends AbstractInternalNode {
    constructor()
    doNoCompression(node: Node, a: AbstractTruffleString, arrayA: number[], offsetA: number, b: AbstractTruffleString, arrayB: number[], offsetB: number, encoding: TruffleString$Encoding, concatLength: number, concatStride: number): number[];
    execute(node: Node, a: AbstractTruffleString, arrayA: number[], offsetA: number, b: AbstractTruffleString, arrayB: number[], offsetB: number, encoding: TruffleString$Encoding, concatLength: number, concatStride: number): number[];
}