import type { KeyMapping$Category } from '../../../../../../../net/minecraft/client/KeyMapping$Category.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { FocusableTextWidget } from '../../../../../../../net/minecraft/client/gui/components/FocusableTextWidget.d.ts'
import type { GuiEventListener } from '../../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { KeyBindsList$Entry } from '../../../../../../../net/minecraft/client/gui/screens/options/controls/KeyBindsList$Entry.d.ts'
export class KeyBindsList$CategoryEntry extends KeyBindsList$Entry {
    static CONTENT_PADDING: number;
    constructor(null_: KeyBindsList$CategoryEntry, category: KeyMapping$Category)
    // private categoryName: FocusableTextWidget;
    children(): GuiEventListener[];
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    narratables(): NarratableEntry[];
    refreshEntry(): void;
}