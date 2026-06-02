import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class MutableTruffleString$FromByteArrayNode extends AbstractPublicNode {
    static create(): MutableTruffleString$FromByteArrayNode;
    static getUncached(): MutableTruffleString$FromByteArrayNode;
    constructor()
    execute(value: number[], byteOffset: number, byteLength: number, encoding: TruffleString$Encoding, copy: boolean): MutableTruffleString;
}