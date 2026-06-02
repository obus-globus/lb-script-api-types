import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { PrivateKey } from '../../../../../java/security/PrivateKey.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProfilePublicKey } from '../../../../../net/minecraft/world/entity/player/ProfilePublicKey.d.ts'
export class ProfileKeyPair extends Record {
    static CODEC: Codec<ProfileKeyPair>;
    constructor(privateKey: PrivateKey, publicKey: ProfilePublicKey, refreshedAfter: Instant)
    // private privateKey: PrivateKey;
    // private publicKey: ProfilePublicKey;
    // private refreshedAfter: Instant;
    dueRefresh(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    privateKey(): PrivateKey;
    publicKey(): ProfilePublicKey;
    refreshedAfter(): Instant;
    toString(): string;
}