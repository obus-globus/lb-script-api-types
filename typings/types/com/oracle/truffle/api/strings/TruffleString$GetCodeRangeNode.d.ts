import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetPreciseCodeRangeWithMaterializationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetPreciseCodeRangeWithMaterializationNode.d.ts'
import type { TruffleString$CodeRange } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$GetCodeRangeNode extends AbstractPublicNode {
    static create(): TruffleString$GetCodeRangeNode;
    static getUncached(): TruffleString$GetCodeRangeNode;
    constructor()
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): TruffleString$CodeRange;
    getCodeRange(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, getPreciseCodeRangeNode: TStringInternalNodes$GetPreciseCodeRangeWithMaterializationNode): TruffleString$CodeRange;
}