import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
export abstract class TruffleString$ReadCharUTF16Node extends AbstractPublicNode {
    static create(): TruffleString$ReadCharUTF16Node;
    static getUncached(): TruffleString$ReadCharUTF16Node;
    constructor()
    doRead(a: AbstractTruffleString, i: number, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, utf16S0Profile: InlinedConditionProfile): string;
    execute(a: AbstractTruffleString, charIndex: number): string;
}