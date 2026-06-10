import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { PlayerChatMessage } from '../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { RemoteChatSession$Data } from '../../../../net/minecraft/network/chat/RemoteChatSession$Data.d.ts'
import type { SignedMessageBody } from '../../../../net/minecraft/network/chat/SignedMessageBody.d.ts'
import type { SignedMessageChain$Decoder } from '../../../../net/minecraft/network/chat/SignedMessageChain$Decoder.d.ts'
import type { SignedMessageValidator } from '../../../../net/minecraft/network/chat/SignedMessageValidator.d.ts'
import type { ProfilePublicKey } from '../../../../net/minecraft/world/entity/player/ProfilePublicKey.d.ts'
export class RemoteChatSession extends Record {
    constructor(sessionId: UUID, profilePublicKey: ProfilePublicKey)
    // private profilePublicKey: ProfilePublicKey;
    // private sessionId: UUID;
    asData(): RemoteChatSession$Data;
    createMessageDecoder(profileId: UUID): (param0: MessageSignature, param1: SignedMessageBody) => PlayerChatMessage;
    createMessageValidator(gracePeriod: Duration): (param0: PlayerChatMessage) => PlayerChatMessage;
    equals(o: Object | null): boolean;
    hasExpired(): boolean;
    hashCode(): number;
    profilePublicKey(): ProfilePublicKey;
    sessionId(): UUID;
    toString(): string;
}