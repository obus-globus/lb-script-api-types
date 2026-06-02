import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class MutableTruffleString$SubstringByteIndexNode extends AbstractPublicNode {
    static create(): MutableTruffleString$SubstringByteIndexNode;
    static getUncached(): MutableTruffleString$SubstringByteIndexNode;
    constructor()
    execute(a: AbstractTruffleString, byteOffset: number, byteLength: number, expectedEncoding: TruffleString$Encoding): MutableTruffleString;
}