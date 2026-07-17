import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$MaterializeNode extends AbstractPublicNode {
    static create(): TruffleString$MaterializeNode;
    static getUncached(): TruffleString$MaterializeNode;
    constructor()
    doMaterialize(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, lazyProfile: InlinedConditionProfile): void;
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): void;
}