import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ChatDecorator } from '../../../../../../net/minecraft/network/chat/ChatDecorator.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class ServerMessageDecoratorEvent extends Object {
    static CONTENT_PHASE: Identifier;
    static EVENT: Event<(param0: ServerPlayer, param1: Component) => net.minecraft.network.chat.Component>;
    static STYLING_PHASE: Identifier;
    private constructor()
}