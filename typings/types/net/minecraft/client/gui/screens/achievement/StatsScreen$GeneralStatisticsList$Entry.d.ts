import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { StatsScreen$GeneralStatisticsList } from '../../../../../../net/minecraft/client/gui/screens/achievement/StatsScreen$GeneralStatisticsList.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Stat } from '../../../../../../net/minecraft/stats/Stat.d.ts'
export class StatsScreen$GeneralStatisticsList$Entry extends ObjectSelectionList$Entry<StatsScreen$GeneralStatisticsList$Entry> {
    static CONTENT_PADDING: number;
    private constructor(null_: StatsScreen$GeneralStatisticsList, stat: Stat<Identifier>)
    // private stat: Stat<Identifier>;
    // private statDisplay: Component;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    // private getValueText(): string;
}