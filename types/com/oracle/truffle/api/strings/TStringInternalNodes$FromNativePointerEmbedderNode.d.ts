import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { TStringInternalNodes$FromBufferWithStringCompactionNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$FromBufferWithStringCompactionNode.d.ts'
import type { TStringInternalNodes$FromNativePointerNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$FromNativePointerNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TStringInternalNodes$FromNativePointerEmbedderNode extends AbstractInternalNode {
    constructor()
    execute(rawPointer: number, byteOffset: number, byteLength: number, encoding: TruffleString$Encoding, copy: boolean): TruffleString;
    fromNativePointer(rawPointer: number, byteOffset: number, byteLength: number, enc: TruffleString$Encoding, copy: boolean, fromNativePointerNode: TStringInternalNodes$FromNativePointerNode, fromBufferWithStringCompactionNode: TStringInternalNodes$FromBufferWithStringCompactionNode): TruffleString;
}