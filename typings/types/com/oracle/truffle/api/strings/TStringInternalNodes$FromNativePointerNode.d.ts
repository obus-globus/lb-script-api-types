import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString$NativePointer } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString$NativePointer.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TStringInternalNodes$FromNativePointerNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, pointer: AbstractTruffleString$NativePointer, byteOffset: number, byteLength: number, encoding: TruffleString$Encoding, isCacheHead: boolean): TruffleString;
}