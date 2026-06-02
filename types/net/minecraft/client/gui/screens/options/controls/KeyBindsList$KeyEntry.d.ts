import type { KeyMapping } from '../../../../../../../net/minecraft/client/KeyMapping.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { GuiEventListener } from '../../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { KeyBindsList$Entry } from '../../../../../../../net/minecraft/client/gui/screens/options/controls/KeyBindsList$Entry.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class KeyBindsList$KeyEntry extends KeyBindsList$Entry {
    static CONTENT_PADDING: number;
    static RESET_BUTTON_TITLE: Component;
    private constructor(null_: KeyBindsList$KeyEntry, key: KeyMapping, name: Component)
    // private changeButton: Button;
    // private hasCollision: boolean;
    // private key: KeyMapping;
    // private name: Component;
    // private resetButton: Button;
    children(): GuiEventListener[];
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    narratables(): NarratableEntry[];
    refreshEntry(): void;
}