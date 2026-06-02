import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { RemoteChatSession } from '../../../../net/minecraft/network/chat/RemoteChatSession.d.ts'
import type { SignatureValidator } from '../../../../net/minecraft/util/SignatureValidator.d.ts'
import type { ProfilePublicKey$Data } from '../../../../net/minecraft/world/entity/player/ProfilePublicKey$Data.d.ts'
export class RemoteChatSession$Data extends Record {
    static read(paraminput: FriendlyByteBuf): RemoteChatSession$Data;
    static write(paramoutput: FriendlyByteBuf, paramdata: RemoteChatSession$Data): void;
    constructor(sessionId: UUID, profilePublicKey: ProfilePublicKey$Data)
    // private profilePublicKey: ProfilePublicKey$Data;
    // private sessionId: UUID;
    equals(o: Object | null): boolean;
    hashCode(): number;
    profilePublicKey(): ProfilePublicKey$Data;
    sessionId(): UUID;
    toString(): string;
    validate(profile: GameProfile, serviceSignatureValidator: SignatureValidator): RemoteChatSession;
}