import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$FromLongNode extends AbstractPublicNode {
    static create(): TruffleString$FromLongNode;
    static getUncached(): TruffleString$FromLongNode;
    constructor()
    execute(value: number, encoding: TruffleString$Encoding, lazy: boolean): TruffleString;
}