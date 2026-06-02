import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class MutableTruffleString$ForceEncodingNode extends AbstractPublicNode {
    static create(): MutableTruffleString$ForceEncodingNode;
    static getUncached(): MutableTruffleString$ForceEncodingNode;
    constructor()
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, targetEncoding: TruffleString$Encoding): MutableTruffleString;
}