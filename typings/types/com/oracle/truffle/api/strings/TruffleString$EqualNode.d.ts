import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$EqualNode extends AbstractPublicNode {
    static create(): TruffleString$EqualNode;
    static getUncached(): TruffleString$EqualNode;
    constructor()
    execute(a: AbstractTruffleString, b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): boolean;
}