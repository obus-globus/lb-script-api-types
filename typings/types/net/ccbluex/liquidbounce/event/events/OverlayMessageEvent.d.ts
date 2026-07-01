import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Fires when an action-bar/overlay message is displayed, exposing the text and whether it is tinted.
 */
export class OverlayMessageEvent extends Event implements WebSocketEvent {
    constructor(text: Component, tinted: boolean)
    readonly text: Component;
    readonly tinted: boolean;
}