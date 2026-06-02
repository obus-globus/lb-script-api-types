import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class MutableTruffleString$WriteByteNode extends AbstractPublicNode {
    static create(): MutableTruffleString$WriteByteNode;
    static getUncached(): MutableTruffleString$WriteByteNode;
    constructor()
    execute(a: MutableTruffleString, byteIndex: number, value: number, expectedEncoding: TruffleString$Encoding): void;
    writeByte(a: MutableTruffleString, byteIndex: number, value: number, expectedEncoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile): void;
}