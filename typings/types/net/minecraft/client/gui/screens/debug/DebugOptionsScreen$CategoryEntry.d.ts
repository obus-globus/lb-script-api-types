import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { DebugOptionsScreen } from '../../../../../../net/minecraft/client/gui/screens/debug/DebugOptionsScreen.d.ts'
import type { DebugOptionsScreen$AbstractOptionEntry } from '../../../../../../net/minecraft/client/gui/screens/debug/DebugOptionsScreen$AbstractOptionEntry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class DebugOptionsScreen$CategoryEntry extends DebugOptionsScreen$AbstractOptionEntry {
    static CONTENT_PADDING: number;
    constructor(null_: DebugOptionsScreen, category: Component)
    // private category: Component;
    children(): GuiEventListener[];
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    narratables(): NarratableEntry[];
    refreshEntry(): void;
}