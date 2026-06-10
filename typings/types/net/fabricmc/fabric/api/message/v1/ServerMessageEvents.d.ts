import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerMessageEvents$AllowChatMessage } from '../../../../../../net/fabricmc/fabric/api/message/v1/ServerMessageEvents$AllowChatMessage.d.ts'
import type { ServerMessageEvents$AllowCommandMessage } from '../../../../../../net/fabricmc/fabric/api/message/v1/ServerMessageEvents$AllowCommandMessage.d.ts'
import type { ServerMessageEvents$AllowGameMessage } from '../../../../../../net/fabricmc/fabric/api/message/v1/ServerMessageEvents$AllowGameMessage.d.ts'
import type { ServerMessageEvents$ChatMessage } from '../../../../../../net/fabricmc/fabric/api/message/v1/ServerMessageEvents$ChatMessage.d.ts'
import type { ServerMessageEvents$CommandMessage } from '../../../../../../net/fabricmc/fabric/api/message/v1/ServerMessageEvents$CommandMessage.d.ts'
import type { ServerMessageEvents$GameMessage } from '../../../../../../net/fabricmc/fabric/api/message/v1/ServerMessageEvents$GameMessage.d.ts'
import type { CommandSourceStack } from '../../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ChatType$Bound } from '../../../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerChatMessage } from '../../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class ServerMessageEvents extends Object {
    static ALLOW_CHAT_MESSAGE: Event<(param0: PlayerChatMessage, param1: ServerPlayer, param2: ChatType$Bound) => boolean>;
    static ALLOW_COMMAND_MESSAGE: Event<(param0: PlayerChatMessage, param1: CommandSourceStack, param2: ChatType$Bound) => boolean>;
    static ALLOW_GAME_MESSAGE: Event<(param0: MinecraftServer, param1: Component, param2: boolean) => boolean>;
    static CHAT_MESSAGE: Event<(param0: PlayerChatMessage, param1: ServerPlayer, param2: ChatType$Bound) => void>;
    static COMMAND_MESSAGE: Event<(param0: PlayerChatMessage, param1: CommandSourceStack, param2: ChatType$Bound) => void>;
    static GAME_MESSAGE: Event<(param0: MinecraftServer, param1: Component, param2: boolean) => void>;
    private constructor()
}