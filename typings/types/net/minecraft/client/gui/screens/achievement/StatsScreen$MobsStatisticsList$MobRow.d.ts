import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class StatsScreen$MobsStatisticsList$MobRow extends ObjectSelectionList$Entry<StatsScreen$MobsStatisticsList$MobRow> {
    static CONTENT_PADDING: number;
    constructor(null_: StatsScreen$MobsStatisticsList$MobRow)
    // private hasKills: boolean;
    // private killedBy: Component;
    // private kills: Component;
    // private mobName: Component;
    // private wasKilledBy: boolean;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
}