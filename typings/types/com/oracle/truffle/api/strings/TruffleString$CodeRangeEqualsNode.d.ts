import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetPreciseCodeRangeWithMaterializationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetPreciseCodeRangeWithMaterializationNode.d.ts'
import type { TruffleString$CodeRange } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
export abstract class TruffleString$CodeRangeEqualsNode extends AbstractPublicNode {
    static create(): TruffleString$CodeRangeEqualsNode;
    static getUncached(): TruffleString$CodeRangeEqualsNode;
    constructor()
    codeRangeEquals(a: AbstractTruffleString, codeRange: TruffleString$CodeRange, getPreciseCodeRangeNode: TStringInternalNodes$GetPreciseCodeRangeWithMaterializationNode): boolean;
    execute(a: AbstractTruffleString, codeRange: TruffleString$CodeRange): boolean;
}