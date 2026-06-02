import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { OptionsList$AbstractEntry } from '../../../../../net/minecraft/client/gui/components/OptionsList$AbstractEntry.d.ts'
import type { StringWidget } from '../../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class OptionsList$HeaderEntry extends OptionsList$AbstractEntry {
    static CONTENT_PADDING: number;
    constructor(screen: Screen, text: Component, paddingTop: number)
    // private paddingTop: number;
    // private screen: Screen;
    // private widget: StringWidget;
    children(): GuiEventListener[];
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    narratables(): NarratableEntry[];
}