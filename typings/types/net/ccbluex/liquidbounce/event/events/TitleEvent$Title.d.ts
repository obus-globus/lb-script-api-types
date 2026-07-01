import type { TitleEvent$TextContent } from '../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent$TextContent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Fires when the on-screen title text is set, exposing the text component. Cancellable.
 */
export class TitleEvent$Title extends TitleEvent$TextContent {
    constructor(text: Component | null)
    text: Component | null;
}