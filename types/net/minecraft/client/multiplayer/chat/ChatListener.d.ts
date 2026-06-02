import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatReceiveEvent$ChatType } from '../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent$ChatType.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ChatListener$Message } from '../../../../../net/minecraft/client/multiplayer/chat/ChatListener$Message.d.ts'
import type { ChatTrustLevel } from '../../../../../net/minecraft/client/multiplayer/chat/ChatTrustLevel.d.ts'
import type { ChatType$Bound } from '../../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MessageSignature } from '../../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { PlayerChatMessage } from '../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { CallbackInfoReturnable } from '../../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.d.ts'
export class ChatListener extends Object {
    constructor(minecraft: Minecraft)
    // private delayedMessageQueue: ChatListener$Message[];
    readonly messageDelay: number;
    // private minecraft: Minecraft;
    // private previousMessageTime: number;
    acceptNextDelayedMessage(): void;
    // private evaluateTrustLevel(message: PlayerChatMessage, decoratedMessage: Component, received: Instant): ChatTrustLevel;
    // private fabric_onChatMessage(arg0: Component, arg1: PlayerChatMessage, arg2: GameProfile, arg3: ChatType$Bound, arg4: Instant, arg5: CallbackInfoReturnable<Object>): void;
    flushQueue(): void;
    // private guessChatUUID(message: Component): UUID;
    handleChatMessageError(senderId: UUID, invalidSignature: MessageSignature, boundChatType: ChatType$Bound): void;
    handleDisguisedChatMessage(message: Component, boundChatType: ChatType$Bound): void;
    // private handleMessage(signature: MessageSignature, handler: () => kotlin.Boolean): void;
    handleOverlay(message: Component): void;
    handlePlayerChatMessage(message: PlayerChatMessage, sender: GameProfile, boundChatType: ChatType$Bound): void;
    handleSystemMessage(message: Component, remote: boolean): void;
    // private isSenderLocalPlayer(senderProfileId: UUID): boolean;
    // private liquid_bounce$emitChatEvent(arg0: ChatType$Bound, arg1: Component, arg2: ChatReceiveEvent$ChatType): boolean;
    // private logPlayerMessage(message: PlayerChatMessage, sender: GameProfile, trustLevel: ChatTrustLevel): void;
    // private logSystemMessage(message: Component, timeStamp: Instant): void;
    // private narrateChatMessage(boundChatType: ChatType$Bound, content: Component): void;
    queueSize(): number;
    removeFromDelayedMessageQueue(signature: MessageSignature): boolean;
    setMessageDelay(messageDelaySeconds: number): void;
    // private showMessageToPlayer(boundChatType: ChatType$Bound, message: PlayerChatMessage, decoratedMessage: Component, sender: GameProfile, onlyShowSecure: boolean, received: Instant): boolean;
    tick(): void;
    // private willDelayMessages(): boolean;
}