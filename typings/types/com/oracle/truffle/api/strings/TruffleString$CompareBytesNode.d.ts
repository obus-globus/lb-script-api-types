import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$CompareBytesNode extends AbstractPublicNode {
    static create(): TruffleString$CompareBytesNode;
    static getUncached(): TruffleString$CompareBytesNode;
    constructor()
    compare(a: AbstractTruffleString, b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, managedProfileB: InlinedConditionProfile, nativeProfileB: InlinedConditionProfile): number;
    execute(a: AbstractTruffleString, b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): number;
}