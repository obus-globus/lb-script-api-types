import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { MultiLineLabel } from '../../../../../../net/minecraft/client/gui/components/MultiLineLabel.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { ConfirmExperimentalFeaturesScreen$DetailsScreen } from '../../../../../../net/minecraft/client/gui/screens/worldselection/ConfirmExperimentalFeaturesScreen$DetailsScreen.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry extends ObjectSelectionList$Entry<ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry> {
    static CONTENT_PADDING: number;
    private constructor(null_: ConfirmExperimentalFeaturesScreen$DetailsScreen, packId: Component, message: Component, splitMessage: MultiLineLabel)
    // private message: Component;
    // private packId: Component;
    // private splitMessage: MultiLineLabel;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
}