import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TStringInternalNodes$FromNativePointerEmbedderNode extends AbstractInternalNode {
    constructor()
    execute(rawPointer: number, byteOffset: number, byteLength: number, encoding: TruffleString$Encoding, copy: boolean): TruffleString;
    fromNativePointerEmbedder(rawPointer: number, byteOffset: number, byteLength: number, enc: TruffleString$Encoding, copy: boolean, utf8BrokenProfile: InlinedConditionProfile, utf16CompactProfile: InlinedConditionProfile, utf32Compact0Profile: InlinedConditionProfile, utf32Compact1Profile: InlinedConditionProfile, singleByteProfile: InlinedConditionProfile): TruffleString;
}