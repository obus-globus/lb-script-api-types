import type { TitleEvent$TextContent } from '../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent$TextContent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class TitleEvent$Subtitle extends TitleEvent$TextContent {
    constructor(text: Component | null)
    text: Component | null;
}