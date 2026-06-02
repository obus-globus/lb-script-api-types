import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetValidOrBrokenCodeRangeNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetValidOrBrokenCodeRangeNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$IsValidNode extends AbstractPublicNode {
    static create(): TruffleString$IsValidNode;
    static getUncached(): TruffleString$IsValidNode;
    constructor()
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): boolean;
    isValid(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, getCodeRangeNode: TStringInternalNodes$GetValidOrBrokenCodeRangeNode): boolean;
}