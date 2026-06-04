import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientRecipeBook } from '../../../../../../net/minecraft/client/ClientRecipeBook.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ComponentPath } from '../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { Renderable } from '../../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { WidgetSprites } from '../../../../../../net/minecraft/client/gui/components/WidgetSprites.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarratableEntry$NarrationPriority } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry$NarrationPriority.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FocusNavigationEvent } from '../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { GhostSlots } from '../../../../../../net/minecraft/client/gui/screens/recipebook/GhostSlots.d.ts'
import type { RecipeBookComponent$TabInfo } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeBookComponent$TabInfo.d.ts'
import type { RecipeBookPage } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeBookPage.d.ts'
import type { RecipeBookTabButton } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeBookTabButton.d.ts'
import type { RecipeCollection } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeCollection.d.ts'
import type { CharacterEvent } from '../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ContextMap } from '../../../../../../net/minecraft/util/context/ContextMap.d.ts'
import type { StackedItemContents } from '../../../../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
import type { RecipeBookMenu } from '../../../../../../net/minecraft/world/inventory/RecipeBookMenu.d.ts'
import type { Slot } from '../../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { RecipeDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { RecipeDisplayId } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
export abstract class RecipeBookComponent<T extends RecipeBookMenu> extends Object implements Renderable, GuiEventListener, NarratableEntry {
    static IMAGE_HEIGHT: number;
    static IMAGE_WIDTH: number;
    static RECIPE_BUTTON_SPRITES: WidgetSprites;
    constructor(menu: T, tabInfos: RecipeBookComponent$TabInfo[])
    // private book: ClientRecipeBook;
    // private filterButton: CycleButton<boolean>;
    // private ghostSlots: GhostSlots;
    // private height: number;
    // private ignoreTextInput: boolean;
    // private lastPlacedRecipe: RecipeDisplayId;
    // private lastRecipe: RecipeDisplayId;
    // private lastRecipeCollection: RecipeCollection;
    // private lastSearch: string;
    // private magnifierIconPlacement: ScreenRectangle;
    // private menu: T;
    // private minecraft: Minecraft;
    // private recipeBookPage: RecipeBookPage;
    // private searchBox: EditBox;
    // private selectedTab: RecipeBookTabButton;
    // private stackedContents: StackedItemContents;
    // private tabButtons: RecipeBookTabButton[];
    // private tabInfos: RecipeBookComponent$TabInfo[];
    // private time: number;
    // private timesInventoryChanged: number;
    readonly visible: boolean;
    // private width: number;
    // private widthTooNarrow: boolean;
    // private xOffset: number;
    charTyped(event: CharacterEvent): boolean;
    // private checkSearchStringUpdate(): void;
    extractGhostRecipe(graphics: GuiGraphicsExtractor, isResultSlotBig: boolean): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractTooltip(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hoveredSlot: Slot): void;
    fillGhostRecipe(ghostSlots: GhostSlots, recipe: RecipeDisplay, context: ContextMap): void;
    fillGhostRecipe(recipe: RecipeDisplay): void;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getCurrentFocusPath(): ComponentPath;
    getFilterButtonTextures(): WidgetSprites;
    getNarratables(): E[];
    getRecipeFilterName(): Component;
    getRectangle(): ScreenRectangle;
    // private getXOrigin(): number;
    // private getYOrigin(): number;
    hasClickedOutside(mx: number, my: number, leftPos: number, topPos: number, imageWidth: number, imageHeight: number): boolean;
    init(width: number, height: number, minecraft: Minecraft, widthTooNarrow: boolean): void;
    // private initVisuals(): void;
    isActive(): boolean;
    isCraftingSlot(slot: Slot): boolean;
    // private isFiltering(): boolean;
    isFocused(): boolean;
    isMouseOver(mouseX: number, mouseY: number): boolean;
    // private isOffsetNextToMainGUI(): boolean;
    isVisible(): boolean;
    // private isVisibleAccordingToBookData(): boolean;
    keyPressed(event: KeyEvent): boolean;
    keyReleased(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseMoved(x: number, y: number): void;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    narrationPriority(): NarratableEntry$NarrationPriority;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    // private onTabButtonPress(button: Button): void;
    // private pirateSpeechForThePeople(searchTarget: string): void;
    preeditUpdated(event: PreeditEvent): boolean;
    recipeShown(recipe: RecipeDisplayId): void;
    recipesUpdated(): void;
    // private replaceSelected(tabButton: RecipeBookTabButton): void;
    // private selectMatchingRecipes(): void;
    selectMatchingRecipes(collection: RecipeCollection, stackedContents: StackedItemContents): void;
    sendUpdateSettings(): void;
    setFocused(focused: boolean): void;
    setVisible(visible: boolean): void;
    shouldTakeFocusAfterInteraction(): boolean;
    slotClicked(slot: Slot): void;
    tick(): void;
    // private toggleFiltering(): void;
    toggleVisibility(): void;
    // private tryPlaceRecipe(recipeCollection: RecipeCollection, recipe: RecipeDisplayId, useMaxItems: boolean): boolean;
    // private updateCollections(resetPage: boolean, isFiltering: boolean): void;
    updateNarration(output: NarrationElementOutput): void;
    updateScreenPosition(width: number, imageWidth: number): number;
    // private updateStackedContents(): void;
    // private updateTabs(isFiltering: boolean): void;
}