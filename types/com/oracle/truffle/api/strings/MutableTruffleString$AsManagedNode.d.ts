import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class MutableTruffleString$AsManagedNode extends AbstractPublicNode {
    static create(): MutableTruffleString$AsManagedNode;
    static getUncached(): MutableTruffleString$AsManagedNode;
    constructor()
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): MutableTruffleString;
}