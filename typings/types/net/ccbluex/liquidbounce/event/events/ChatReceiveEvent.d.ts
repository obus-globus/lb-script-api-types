import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { ChatReceiveEvent$ChatType } from '../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent$ChatType.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ChatReceiveEvent extends CancellableEvent implements WebSocketEvent {
    constructor(message: string, textData: Component, type: ChatReceiveEvent$ChatType, applyChatDecoration: (param0: Component) => unknown)
    readonly applyChatDecoration: (param0: Component) => unknown;
    readonly message: string;
    readonly textData: Component;
    readonly type: ChatReceiveEvent$ChatType;
}