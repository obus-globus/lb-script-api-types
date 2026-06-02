import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { IProfilePublicKey_Data } from '../../../../../com/viaversion/viafabricplus/injection/access/networking/legacy_chat_signature/IProfilePublicKey_Data.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { PublicKey } from '../../../../../java/security/PublicKey.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { SignatureValidator } from '../../../../../net/minecraft/util/SignatureValidator.d.ts'
export class ProfilePublicKey$Data extends Record implements IProfilePublicKey_Data {
    static CODEC: Codec<ProfilePublicKey$Data>;
    // private expiresAt: Instant;
    // private key: PublicKey;
    // private keySignature: number[];
    // private viaFabricPlus$legacyKeySignature: number[];
    equals(o: Object | null): boolean;
    expiresAt(): Instant;
    hasExpired(): boolean;
    hasExpired(gracePeriod: Duration): boolean;
    hashCode(): number;
    key(): PublicKey;
    keySignature(): number[];
    // private signedPayload(profileId: UUID): number[];
    toString(): string;
    // private validateSignature(validator: SignatureValidator, profileId: UUID): boolean;
    viafabricplus$getLegacyPublicKeySignature(): number[];
    viafabricplus$setLegacyPublicKeySignature(arg0: number[]): void;
    write(output: FriendlyByteBuf): void;
}