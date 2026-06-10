import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricCreativeModeInventoryScreen } from '../../../../../../net/fabricmc/fabric/api/client/creativetab/v1/FabricCreativeModeInventoryScreen.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractContainerScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { CreativeInventoryListener } from '../../../../../../net/minecraft/client/gui/screens/inventory/CreativeInventoryListener.d.ts'
import type { CreativeModeInventoryScreen$ItemPickerMenu } from '../../../../../../net/minecraft/client/gui/screens/inventory/CreativeModeInventoryScreen$ItemPickerMenu.d.ts'
import type { EffectsInInventory } from '../../../../../../net/minecraft/client/gui/screens/inventory/EffectsInInventory.d.ts'
import type { CharacterEvent } from '../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { SessionSearchTrees } from '../../../../../../net/minecraft/client/multiplayer/SessionSearchTrees.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { ContainerInput } from '../../../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
import type { Slot } from '../../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { CreativeModeTab } from '../../../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CreativeModeInventoryScreen extends AbstractContainerScreen<CreativeModeInventoryScreen$ItemPickerMenu> implements FabricCreativeModeInventoryScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static selectedTab: CreativeModeTab;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static handleHotbarLoadOrSave(paramminecraft: Minecraft, paramindex: number, paramisLoadPressed: boolean, paramisSavePressed: boolean): void;
    constructor(player: LocalPlayer, enabledFeatures: FeatureFlagSet, displayOperatorCreativeTab: boolean)
    // private destroyItemSlot: Slot;
    // private displayOperatorCreativeTab: boolean;
    // private effects: EffectsInInventory;
    // private hasClickedOutside: boolean;
    // private ignoreTextInput: boolean;
    // private listener: CreativeInventoryListener;
    // private originalSlots: Slot[];
    // private scrollOffs: number;
    // private scrolling: boolean;
    // private searchBox: EditBox;
    // private visibleTags: TagKey<Item>[];
    // private canScroll(): boolean;
    charTyped(event: CharacterEvent): boolean;
    checkTabClicked(tab: CreativeModeTab, xm: number, ym: number): boolean;
    checkTabHovering(graphics: GuiGraphicsExtractor, tab: CreativeModeTab, xm: number, ym: number): boolean;
    containerTick(): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractLabels(graphics: GuiGraphicsExtractor, xm: number, ym: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractTabButton(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, tab: CreativeModeTab): void;
    getCurrentPage(): number;
    getPage(arg0: CreativeModeTab): number;
    getPageCount(): number;
    getSelectedTab(): CreativeModeTab;
    // private getTabX(tab: CreativeModeTab): number;
    // private getTabY(tab: CreativeModeTab): number;
    getTabsOnPage(arg0: number): CreativeModeTab[];
    getTabsOnPage(arg0: number): (Object | null)[];
    getTooltipFromContainerItem(itemStack: ItemStack): Component[];
    hasAdditionalPages(): boolean;
    hasClickedOutside(mx: number, my: number, xo: number, yo: number): boolean;
    // private hasGroupForPage(arg0: number): boolean;
    // private hasPermissions(player: Player): boolean;
    init(): void;
    init(width: number, height: number): void;
    insideScrollbar(xm: number, ym: number): boolean;
    // private isCreativeSlot(slot: Slot): boolean;
    isInventoryOpen(): boolean;
    // private isTabVisible(arg0: CreativeModeTab): boolean;
    keyPressed(event: KeyEvent): boolean;
    keyReleased(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    preeditUpdated(event: PreeditEvent): boolean;
    // private refreshCurrentTabContents(displayList: ItemStack[]): void;
    // private refreshSearchResults(): void;
    removed(): void;
    resize(width: number, height: number): void;
    // private selectTab(tab: CreativeModeTab): void;
    setSelectedTab(arg0: CreativeModeTab): boolean;
    showsActiveEffects(): boolean;
    slotClicked(slot: Slot, slotId: number, buttonNum: number, containerInput: ContainerInput): void;
    switchToNextPage(): boolean;
    switchToPage(arg0: number): boolean;
    switchToPreviousPage(): boolean;
    // private tryRebuildTabContents(searchTrees: SessionSearchTrees, enabledFeatures: FeatureFlagSet, hasPermissions: boolean, holders: HolderLookup$Provider): boolean;
    // private tryRefreshInvalidatedTabs(enabledFeatures: FeatureFlagSet, hasPermissions: boolean, holders: HolderLookup$Provider): void;
    // private updateSelection(): void;
    // private updateVisibleTags(searchTerm: string): void;
}