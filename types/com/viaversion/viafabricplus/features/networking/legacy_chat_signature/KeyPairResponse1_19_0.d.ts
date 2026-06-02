import type { KeyPairResponse$KeyPair } from '../../../../../../com/mojang/authlib/yggdrasil/response/KeyPairResponse$KeyPair.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class KeyPairResponse1_19_0 extends Record {
    constructor(keyPair: KeyPairResponse$KeyPair, publicKeySignatureV2: ByteBuffer, publicKeySignature: ByteBuffer, expiresAt: string, refreshedAfter: string)
    // private expiresAt: string;
    // private keyPair: KeyPairResponse$KeyPair;
    // private publicKeySignature: ByteBuffer;
    // private publicKeySignatureV2: ByteBuffer;
    // private refreshedAfter: string;
    equals(arg0: Object | null): boolean;
    expiresAt(): string;
    hashCode(): number;
    keyPair(): KeyPairResponse$KeyPair;
    publicKeySignature(): ByteBuffer;
    publicKeySignatureV2(): ByteBuffer;
    refreshedAfter(): string;
    toString(): string;
}