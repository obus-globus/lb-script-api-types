import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TStringInternalNodes$FromBufferWithStringCompactionNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, dataA: Object, strOffsetA: number, byteLength: number, encoding: TruffleString$Encoding, copy: boolean, isCacheHead: boolean): TruffleString;
}