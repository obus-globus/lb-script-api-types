import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class MutableTruffleString$FromNativePointerNode extends AbstractPublicNode {
    static create(): MutableTruffleString$FromNativePointerNode;
    static getUncached(): MutableTruffleString$FromNativePointerNode;
    constructor()
    execute(pointerObject: Object, byteOffset: number, byteLength: number, encoding: TruffleString$Encoding, copy: boolean): MutableTruffleString;
    fromNativePointer(pointerObject: Object, byteOffset: number, byteLength: number, enc: TruffleString$Encoding, copy: boolean, interopLibrary: Node): MutableTruffleString;
}