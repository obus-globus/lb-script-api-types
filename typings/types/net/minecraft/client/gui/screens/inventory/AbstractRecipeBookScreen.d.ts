import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { ScreenPosition } from '../../../../../../net/minecraft/client/gui/navigation/ScreenPosition.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractContainerScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { RecipeBookComponent } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeBookComponent.d.ts'
import type { RecipeUpdateListener } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeUpdateListener.d.ts'
import type { CharacterEvent } from '../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ContainerInput } from '../../../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
import type { RecipeBookMenu } from '../../../../../../net/minecraft/world/inventory/RecipeBookMenu.d.ts'
import type { Slot } from '../../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { RecipeDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
export abstract class AbstractRecipeBookScreen<T extends RecipeBookMenu> extends AbstractContainerScreen<T> implements RecipeUpdateListener {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(menu: T, recipeBookComponent: RecipeBookComponent<Object>, inventory: (Object | null)[], title: Component)
    // private recipeBookComponent: RecipeBookComponent<Object>;
    // private widthTooNarrow: boolean;
    charTyped(event: CharacterEvent): boolean;
    containerTick(): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractSlots(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    fillGhostRecipe(display: RecipeDisplay): void;
    getRecipeBookButtonPosition(): ScreenPosition;
    hasClickedOutside(mx: number, my: number, xo: number, yo: number): boolean;
    init(): void;
    init(width: number, height: number): void;
    // private initButton(): void;
    isBiggerResultSlot(): boolean;
    isHovering(left: number, top: number, w: number, h: number, xm: number, ym: number): boolean;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    onRecipeBookButtonClick(): void;
    recipesUpdated(): void;
    slotClicked(slot: Slot, slotId: number, buttonNum: number, containerInput: ContainerInput): void;
}