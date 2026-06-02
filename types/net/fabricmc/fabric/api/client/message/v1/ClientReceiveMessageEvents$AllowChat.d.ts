import type { GameProfile } from '../../../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Instant } from '../../../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChatType$Bound } from '../../../../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerChatMessage } from '../../../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
export interface ClientReceiveMessageEvents$AllowChat extends Object{
    allowReceiveChatMessage(arg0: Component, arg1: PlayerChatMessage, arg2: GameProfile, arg3: ChatType$Bound, arg4: Instant): boolean;
}