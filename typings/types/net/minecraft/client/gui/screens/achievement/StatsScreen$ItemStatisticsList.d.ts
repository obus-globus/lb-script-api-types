import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ContainerObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList.d.ts'
import type { StatsScreen$ItemStatisticsList$Entry } from '../../../../../../net/minecraft/client/gui/screens/achievement/StatsScreen$ItemStatisticsList$Entry.d.ts'
import type { StatsScreen$ItemStatisticsList$ItemRow } from '../../../../../../net/minecraft/client/gui/screens/achievement/StatsScreen$ItemStatisticsList$ItemRow.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Stat } from '../../../../../../net/minecraft/stats/Stat.d.ts'
export class StatsScreen$ItemStatisticsList extends ContainerObjectSelectionList<StatsScreen$ItemStatisticsList$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: StatsScreen$ItemStatisticsList, minecraft: Minecraft)
    // private blockColumns: Stat<T>[][];
    // private itemColumns: Stat<T>[][];
    // private itemStatSorter: (param0: StatsScreen$ItemStatisticsList$ItemRow) => kotlin.Boolean;
    // private sortColumn: Stat<T>[];
    // private sortOrder: number;
    extractListBackground(graphics: GuiGraphicsExtractor): void;
    extractListSeparators(graphics: GuiGraphicsExtractor): void;
    // private getColumn(i: number): Stat<T>[];
    // private getColumnIndex(column: Stat<T>[]): number;
    // private getColumnX(col: number): number;
    // private getItemRows(): StatsScreen$ItemStatisticsList$ItemRow[];
    getRowWidth(): number;
    sortByColumn(column: Stat<T>[]): void;
    sortItems(comparator: (param0: StatsScreen$ItemStatisticsList$ItemRow) => kotlin.Boolean): void;
}