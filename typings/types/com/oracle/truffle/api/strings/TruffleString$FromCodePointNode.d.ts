import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$FromCodePointNode extends AbstractPublicNode {
    static create(): TruffleString$FromCodePointNode;
    static getUncached(): TruffleString$FromCodePointNode;
    constructor()
    execute(codepoint: number, encoding: TruffleString$Encoding): TruffleString;
    execute(codepoint: number, encoding: TruffleString$Encoding, allowUTF16Surrogates: boolean): TruffleString;
    fromCodePoint(c: number, enc: TruffleString$Encoding, allowUTF16Surrogates: boolean, bmpProfile: InlinedConditionProfile, invalidCodePoint: InlinedBranchProfile): TruffleString;
}