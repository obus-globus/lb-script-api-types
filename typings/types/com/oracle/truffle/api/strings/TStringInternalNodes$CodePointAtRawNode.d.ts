import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
export abstract class TStringInternalNodes$CodePointAtRawNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, a: AbstractTruffleString, arrayA: number[], offsetA: number, codeRangeA: number, encoding: TruffleString$Encoding, i: number, errorHandling: TruffleString$ErrorHandling): number;
}