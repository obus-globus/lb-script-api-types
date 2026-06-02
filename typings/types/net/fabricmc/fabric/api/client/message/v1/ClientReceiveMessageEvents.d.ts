import type { GameProfile } from '../../../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Instant } from '../../../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientReceiveMessageEvents$AllowChat } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents$AllowChat.d.ts'
import type { ClientReceiveMessageEvents$AllowGame } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents$AllowGame.d.ts'
import type { ClientReceiveMessageEvents$Chat } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents$Chat.d.ts'
import type { ClientReceiveMessageEvents$ChatCanceled } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents$ChatCanceled.d.ts'
import type { ClientReceiveMessageEvents$Game } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents$Game.d.ts'
import type { ClientReceiveMessageEvents$GameCanceled } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents$GameCanceled.d.ts'
import type { ClientReceiveMessageEvents$ModifyGame } from '../../../../../../../net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents$ModifyGame.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ChatType$Bound } from '../../../../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerChatMessage } from '../../../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
export class ClientReceiveMessageEvents extends Object {
    static ALLOW_CHAT: Event<(param0: Component, param1: PlayerChatMessage, param2: GameProfile, param3: ChatType$Bound, param4: Instant) => kotlin.Boolean>;
    static ALLOW_GAME: Event<(param0: Component, param1: boolean) => kotlin.Boolean>;
    static CHAT: Event<(param0: Component, param1: PlayerChatMessage, param2: GameProfile, param3: ChatType$Bound, param4: Instant) => void>;
    static CHAT_CANCELED: Event<(param0: Component, param1: PlayerChatMessage, param2: GameProfile, param3: ChatType$Bound, param4: Instant) => void>;
    static GAME: Event<(param0: Component, param1: boolean) => void>;
    static GAME_CANCELED: Event<(param0: Component, param1: boolean) => void>;
    static MODIFY_GAME: Event<(param0: Component, param1: boolean) => net.minecraft.network.chat.Component>;
    private constructor()
}