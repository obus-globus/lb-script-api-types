import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
export abstract class TruffleString$ToJavaStringNode extends AbstractPublicNode {
    static create(): TruffleString$ToJavaStringNode;
    static getUncached(): TruffleString$ToJavaStringNode;
    constructor()
    execute(a: AbstractTruffleString): string;
}