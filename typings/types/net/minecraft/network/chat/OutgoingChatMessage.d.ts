import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChatType$Bound } from '../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface OutgoingChatMessage extends Object{
    content(): Component;
    sendToPlayer(player: ServerPlayer, filtered: boolean, chatType: ChatType$Bound): void;
}