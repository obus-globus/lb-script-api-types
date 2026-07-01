import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { ChatReceiveEvent$ChatType } from '../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent$ChatType.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Fires when a chat or system message is received, exposing the raw message string and its component form. Cancellable - cancelling hides the message.
 */
export class ChatReceiveEvent extends CancellableEvent implements WebSocketEvent {
    constructor(message: string, textData: Component, type: ChatReceiveEvent$ChatType, applyChatDecoration: (param0: Component) => Object | null)
    readonly applyChatDecoration: (param0: Component) => Object | null;
    readonly message: string;
    readonly textData: Component;
    readonly type: ChatReceiveEvent$ChatType;
}