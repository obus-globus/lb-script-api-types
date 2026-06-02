import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TStringInternalNodes$FromBufferWithStringCompactionNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$FromBufferWithStringCompactionNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$FromByteArrayNode extends AbstractPublicNode {
    static create(): TruffleString$FromByteArrayNode;
    static getUncached(): TruffleString$FromByteArrayNode;
    constructor()
    execute(value: number[], encoding: TruffleString$Encoding): TruffleString;
    execute(value: number[], encoding: TruffleString$Encoding, copy: boolean): TruffleString;
    execute(value: number[], byteOffset: number, byteLength: number, encoding: TruffleString$Encoding, copy: boolean): TruffleString;
    fromByteArray(value: number[], byteOffset: number, byteLength: number, enc: TruffleString$Encoding, copy: boolean, fromBufferWithStringCompactionNode: TStringInternalNodes$FromBufferWithStringCompactionNode): TruffleString;
}