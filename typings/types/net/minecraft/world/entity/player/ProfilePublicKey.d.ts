import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { SignatureValidator } from '../../../../../net/minecraft/util/SignatureValidator.d.ts'
import type { ProfilePublicKey$Data } from '../../../../../net/minecraft/world/entity/player/ProfilePublicKey$Data.d.ts'
export class ProfilePublicKey extends Record {
    static EXPIRED_PROFILE_PUBLIC_KEY: Component;
    static EXPIRY_GRACE_PERIOD: Duration;
    static TRUSTED_CODEC: Codec<ProfilePublicKey>;
    static createValidated(paramvalidator: SignatureValidator, paramprofileId: UUID, paramdata: ProfilePublicKey$Data): ProfilePublicKey;
    constructor(data: ProfilePublicKey$Data)
    // private data: ProfilePublicKey$Data;
    createSignatureValidator(): SignatureValidator;
    data(): ProfilePublicKey$Data;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}