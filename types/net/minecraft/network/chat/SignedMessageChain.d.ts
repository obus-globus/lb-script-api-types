import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { SignedMessageBody } from '../../../../net/minecraft/network/chat/SignedMessageBody.d.ts'
import type { SignedMessageChain$Decoder } from '../../../../net/minecraft/network/chat/SignedMessageChain$Decoder.d.ts'
import type { SignedMessageChain$Encoder } from '../../../../net/minecraft/network/chat/SignedMessageChain$Encoder.d.ts'
import type { SignedMessageLink } from '../../../../net/minecraft/network/chat/SignedMessageLink.d.ts'
import type { Signer } from '../../../../net/minecraft/util/Signer.d.ts'
import type { ProfilePublicKey } from '../../../../net/minecraft/world/entity/player/ProfilePublicKey.d.ts'
export class SignedMessageChain extends Object {
    constructor(profileId: UUID, sessionId: UUID)
    // private lastTimeStamp: Instant;
    // private nextLink: SignedMessageLink;
    decoder(profilePublicKey: ProfilePublicKey): (param0: MessageSignature, param1: SignedMessageBody) => net.minecraft.network.chat.PlayerChatMessage;
    encoder(signer: Signer): (param0: SignedMessageBody) => net.minecraft.network.chat.MessageSignature;
}