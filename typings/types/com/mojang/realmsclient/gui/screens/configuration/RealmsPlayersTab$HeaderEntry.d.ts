import type { RealmsPlayersTab } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsPlayersTab.d.ts'
import type { RealmsPlayersTab$Entry } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsPlayersTab$Entry.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { FocusableTextWidget } from '../../../../../../net/minecraft/client/gui/components/FocusableTextWidget.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
export class RealmsPlayersTab$HeaderEntry extends RealmsPlayersTab$Entry {
    static CONTENT_PADDING: number;
    constructor(null_: RealmsPlayersTab)
    // private cachedNumberOfInvites: string;
    // private invitedWidget: FocusableTextWidget;
    children(): GuiEventListener[];
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    // private height(lineHeight: number): number;
    narratables(): NarratableEntry[];
}