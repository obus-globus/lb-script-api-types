import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TruffleString$CopyToNativeMemoryNode extends AbstractPublicNode {
    static create(): TruffleString$CopyToNativeMemoryNode;
    static getUncached(): TruffleString$CopyToNativeMemoryNode;
    constructor()
    doCopy(a: AbstractTruffleString, byteFromIndexA: number, pointerObject: Object, byteFromIndexB: number, byteLength: number, expectedEncoding: TruffleString$Encoding, interopLibrary: Node, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, utf16Profile: InlinedConditionProfile, utf16S0Profile: InlinedConditionProfile, utf32Profile: InlinedConditionProfile, utf32S0Profile: InlinedConditionProfile, utf32S1Profile: InlinedConditionProfile): void;
    execute(a: AbstractTruffleString, byteFromIndexA: number, pointerObject: Object, byteFromIndexDst: number, byteLength: number, expectedEncoding: TruffleString$Encoding): void;
}