import type { KeyPairResponse$KeyPair } from '../../../../../com/mojang/authlib/yggdrasil/response/KeyPairResponse$KeyPair.d.ts'
import type { IProfilePublicKey_Data } from '../../../../../com/viaversion/viafabricplus/injection/access/networking/legacy_chat_signature/IProfilePublicKey_Data.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class KeyPairResponse extends Record implements IProfilePublicKey_Data {
    constructor(keyPair: KeyPairResponse$KeyPair, publicKeySignature: ByteBuffer, expiresAt: string, refreshedAfter: string)
    // private expiresAt: string;
    // private keyPair: KeyPairResponse$KeyPair;
    // private publicKeySignature: ByteBuffer;
    // private refreshedAfter: string;
    // private viaFabricPlus$legacyKeySignature: number[];
    equals(arg0: Object | null): boolean;
    expiresAt(): string;
    hashCode(): number;
    keyPair(): KeyPairResponse$KeyPair;
    publicKeySignature(): ByteBuffer;
    refreshedAfter(): string;
    toString(): string;
    viafabricplus$getLegacyPublicKeySignature(): number[];
    viafabricplus$setLegacyPublicKeySignature(arg0: number[]): void;
}