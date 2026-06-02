import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoggedChatMessage$Player } from '../../../../../../net/minecraft/client/multiplayer/chat/LoggedChatMessage$Player.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface ChatSelectionLogFiller$Output extends Object{
    acceptDivider(text: Component): void;
    acceptMessage(id: number, message: LoggedChatMessage$Player): void;
}