import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { StatsScreen$ItemStatisticsList$Entry } from '../../../../../../net/minecraft/client/gui/screens/achievement/StatsScreen$ItemStatisticsList$Entry.d.ts'
import type { StatsScreen$ItemStatisticsList$ItemRow$ItemRowWidget } from '../../../../../../net/minecraft/client/gui/screens/achievement/StatsScreen$ItemStatisticsList$ItemRow$ItemRowWidget.d.ts'
import type { Stat } from '../../../../../../net/minecraft/stats/Stat.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
export class StatsScreen$ItemStatisticsList$ItemRow extends StatsScreen$ItemStatisticsList$Entry {
    static CONTENT_PADDING: number;
    private constructor(null_: StatsScreen$ItemStatisticsList$ItemRow, item: Item)
    // private item: Item;
    // private itemRowWidget: StatsScreen$ItemStatisticsList$ItemRow$ItemRowWidget;
    children(): GuiEventListener[];
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    extractStat(graphics: GuiGraphicsExtractor, stat: Stat<Object>, x: number, y: number, shaded: boolean): void;
    getItem(): Item;
    narratables(): NarratableEntry[];
}