import type { RealmsRegion } from '../../../../../../com/mojang/realmsclient/dto/RealmsRegion.d.ts'
import type { RegionSelectionPreference } from '../../../../../../com/mojang/realmsclient/dto/RegionSelectionPreference.d.ts'
import type { ServiceQuality } from '../../../../../../com/mojang/realmsclient/dto/ServiceQuality.d.ts'
import type { RealmsPreferredRegionSelectionScreen$RegionSelectionList } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsPreferredRegionSelectionScreen$RegionSelectionList.d.ts'
import type { RealmsSettingsTab$RegionSelection } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsSettingsTab$RegionSelection.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsPreferredRegionSelectionScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(parent: Screen, applySettings: (param0: RegionSelectionPreference, param1: RealmsRegion) => void, regionServiceQuality: { [key in RealmsRegion]: ServiceQuality }, currentSelection: RealmsSettingsTab$RegionSelection)
    // private applySettings: (param0: RegionSelectionPreference, param1: RealmsRegion) => void;
    // private doneButton: Button;
    // private layout: HeaderAndFooterLayout;
    // private list: RealmsPreferredRegionSelectionScreen$RegionSelectionList;
    // private parent: Screen;
    // private regionServiceQuality: { [key in RealmsRegion]: ServiceQuality };
    // private selection: RealmsSettingsTab$RegionSelection;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    // private onDone(): void;
    repositionElements(): void;
    // private updateButtonValidity(): void;
}