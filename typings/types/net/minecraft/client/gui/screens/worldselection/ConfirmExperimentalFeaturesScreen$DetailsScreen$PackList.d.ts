import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { ConfirmExperimentalFeaturesScreen$DetailsScreen } from '../../../../../../net/minecraft/client/gui/screens/worldselection/ConfirmExperimentalFeaturesScreen$DetailsScreen.d.ts'
import type { ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Pack } from '../../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
export class ConfirmExperimentalFeaturesScreen$DetailsScreen$PackList extends ObjectSelectionList<ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: ConfirmExperimentalFeaturesScreen$DetailsScreen, minecraft: Minecraft, selectedPacks: Pack[])
    getRowWidth(): number;
}