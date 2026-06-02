import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$InternalCopyToByteArrayNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$InternalCopyToByteArrayNode.d.ts'
export abstract class TruffleString$CopyToByteArrayNode extends AbstractPublicNode {
    static create(): TruffleString$CopyToByteArrayNode;
    static getUncached(): TruffleString$CopyToByteArrayNode;
    constructor()
    doCopy(a: AbstractTruffleString, byteFromIndexA: number, dst: number[], byteFromIndexDst: number, byteLength: number, expectedEncoding: TruffleString$Encoding, internalNode: TruffleString$InternalCopyToByteArrayNode): void;
    execute(string: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): number[];
    execute(a: AbstractTruffleString, byteFromIndexA: number, dst: number[], byteFromIndexDst: number, byteLength: number, expectedEncoding: TruffleString$Encoding): void;
}