import type { TitleEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Base type for title-bar events that carry a text component (title and subtitle). Cancellable.
 */
export class TitleEvent$TextContent extends TitleEvent {
    protected constructor()
    text: Component | null;
}