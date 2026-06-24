import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { StatsScreen } from '../../../../../../net/minecraft/client/gui/screens/achievement/StatsScreen.d.ts'
import type { StatsScreen$MobsStatisticsList$MobRow } from '../../../../../../net/minecraft/client/gui/screens/achievement/StatsScreen$MobsStatisticsList$MobRow.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class StatsScreen$MobsStatisticsList extends ObjectSelectionList<StatsScreen$MobsStatisticsList$MobRow> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: StatsScreen, minecraft: Minecraft)
    extractListBackground(graphics: GuiGraphicsExtractor): void;
    extractListSeparators(graphics: GuiGraphicsExtractor): void;
    getRowWidth(): number;
}