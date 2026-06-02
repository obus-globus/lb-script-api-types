import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TStringInternalNodes$ConcatEagerNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, a: AbstractTruffleString, b: AbstractTruffleString, encoding: TruffleString$Encoding, concatLength: number, concatStride: number, concatCodeRange: number): TruffleString;
}