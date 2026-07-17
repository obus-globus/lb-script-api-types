import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TruffleString$FromZeroTerminatedNativePointerNode extends AbstractPublicNode {
    static create(): TruffleString$FromZeroTerminatedNativePointerNode;
    static getUncached(): TruffleString$FromZeroTerminatedNativePointerNode;
    constructor()
    execute(pointerObject: Object, byteOffset: number, stride: number, encoding: TruffleString$Encoding, copy: boolean): TruffleString;
    execute16Bit(pointerObject: Object, byteOffset: number, encoding: TruffleString$Encoding, copy: boolean): TruffleString;
    execute32Bit(pointerObject: Object, byteOffset: number, encoding: TruffleString$Encoding, copy: boolean): TruffleString;
    execute8Bit(pointerObject: Object, byteOffset: number, encoding: TruffleString$Encoding, copy: boolean): TruffleString;
    fromZeroTerminatedNativePointer(pointerObject: Object, byteOffset: number, stride: number, enc: TruffleString$Encoding, copy: boolean, interopLibrary: Node, rawPointerProfile: InlinedConditionProfile, utf8BrokenProfile: InlinedConditionProfile, utf16CompactProfile: InlinedConditionProfile, utf32Compact0Profile: InlinedConditionProfile, utf32Compact1Profile: InlinedConditionProfile, singleByteProfile: InlinedConditionProfile): TruffleString;
}