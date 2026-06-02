import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$InternalAsTruffleStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$InternalAsTruffleStringNode.d.ts'
export abstract class TruffleString$AsTruffleStringNode extends AbstractPublicNode {
    static create(): TruffleString$AsTruffleStringNode;
    static getUncached(): TruffleString$AsTruffleStringNode;
    constructor()
    doDefault(value: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, internalNode: TruffleString$InternalAsTruffleStringNode): TruffleString;
    execute(value: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): TruffleString;
}