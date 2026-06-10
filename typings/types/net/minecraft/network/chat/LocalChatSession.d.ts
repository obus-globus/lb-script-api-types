import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { RemoteChatSession } from '../../../../net/minecraft/network/chat/RemoteChatSession.d.ts'
import type { SignedMessageBody } from '../../../../net/minecraft/network/chat/SignedMessageBody.d.ts'
import type { SignedMessageChain$Encoder } from '../../../../net/minecraft/network/chat/SignedMessageChain$Encoder.d.ts'
import type { ProfileKeyPair } from '../../../../net/minecraft/world/entity/player/ProfileKeyPair.d.ts'
export class LocalChatSession extends Record {
    static create(paramkeyPair: ProfileKeyPair): LocalChatSession;
    constructor(sessionId: UUID, keyPair: ProfileKeyPair)
    // private keyPair: ProfileKeyPair;
    // private sessionId: UUID;
    asRemote(): RemoteChatSession;
    createMessageEncoder(profileId: UUID): (param0: SignedMessageBody) => MessageSignature;
    equals(o: Object | null): boolean;
    hashCode(): number;
    keyPair(): ProfileKeyPair;
    sessionId(): UUID;
    toString(): string;
}