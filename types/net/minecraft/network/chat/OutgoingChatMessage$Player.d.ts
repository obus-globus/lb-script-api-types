import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChatType$Bound } from '../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { OutgoingChatMessage } from '../../../../net/minecraft/network/chat/OutgoingChatMessage.d.ts'
import type { PlayerChatMessage } from '../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class OutgoingChatMessage$Player extends Record implements OutgoingChatMessage {
    static create(parammessage: PlayerChatMessage): OutgoingChatMessage;
    constructor(message: PlayerChatMessage)
    // private message: PlayerChatMessage;
    content(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    message(): PlayerChatMessage;
    sendToPlayer(player: ServerPlayer, filtered: boolean, chatType: ChatType$Bound): void;
    toString(): string;
}