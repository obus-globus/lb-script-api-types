import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetCodePointLengthWithMaterializationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodePointLengthWithMaterializationNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$CodePointLengthNode extends AbstractPublicNode {
    static create(): TruffleString$CodePointLengthNode;
    static getUncached(): TruffleString$CodePointLengthNode;
    constructor()
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): number;
    get(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, getCodePointLengthNode: TStringInternalNodes$GetCodePointLengthWithMaterializationNode): number;
}