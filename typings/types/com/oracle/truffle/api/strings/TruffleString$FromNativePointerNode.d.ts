import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TStringInternalNodes$FromBufferWithStringCompactionNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$FromBufferWithStringCompactionNode.d.ts'
import type { TStringInternalNodes$FromNativePointerNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$FromNativePointerNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TruffleString$FromNativePointerNode extends AbstractPublicNode {
    static create(): TruffleString$FromNativePointerNode;
    static getUncached(): TruffleString$FromNativePointerNode;
    constructor()
    execute(pointerObject: Object, byteOffset: number, byteLength: number, encoding: TruffleString$Encoding, copy: boolean): TruffleString;
    fromNativePointer(pointerObject: Object, byteOffset: number, byteLength: number, enc: TruffleString$Encoding, copy: boolean, interopLibrary: Node, fromNativePointerNode: TStringInternalNodes$FromNativePointerNode, fromBufferWithStringCompactionNode: TStringInternalNodes$FromBufferWithStringCompactionNode): TruffleString;
}