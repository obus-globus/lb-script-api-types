import type { TitleEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class TitleEvent$TextContent extends TitleEvent {
    protected constructor()
    text: Component | null;
}