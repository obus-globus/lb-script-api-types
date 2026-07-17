import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$ConcatNode extends AbstractPublicNode {
    static create(): TruffleString$ConcatNode;
    static getUncached(): TruffleString$ConcatNode;
    constructor()
    execute(a: AbstractTruffleString, b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, lazy: boolean): TruffleString;
}