import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TStringInternalNodes$RegionEqualsNode extends AbstractInternalNode {
    constructor()
    direct(a: AbstractTruffleString, arrayA: number[], offsetA: number, codeRangeA: number, fromIndexA: number, b: AbstractTruffleString, arrayB: number[], offsetB: number, codeRangeB: number, fromIndexB: number, length: number, encoding: TruffleString$Encoding): boolean;
    execute(node: Node, a: AbstractTruffleString, arrayA: number[], offsetA: number, codeRangeA: number, fromIndexA: number, b: AbstractTruffleString, arrayB: number[], offsetB: number, codeRangeB: number, fromIndexB: number, length: number, encoding: TruffleString$Encoding): boolean;
}