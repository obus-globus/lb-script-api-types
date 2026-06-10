import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { RecipeBookPage } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeBookPage.d.ts'
import type { RecipeButton$ResolvedEntry } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeButton$ResolvedEntry.d.ts'
import type { RecipeCollection } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeCollection.d.ts'
import type { SlotSelectTime } from '../../../../../../net/minecraft/client/gui/screens/recipebook/SlotSelectTime.d.ts'
import type { MouseButtonInfo } from '../../../../../../net/minecraft/client/input/MouseButtonInfo.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ContextMap } from '../../../../../../net/minecraft/util/context/ContextMap.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { RecipeDisplayId } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
export class RecipeButton extends AbstractWidget {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(slotSelectTime: () => number)
    // private allRecipesHaveSameResultDisplay: boolean;
    // private animationTime: number;
    readonly collection: RecipeCollection;
    // private selectedEntries: RecipeButton$ResolvedEntry[];
    // private slotSelectTime: () => number;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getCollection(): RecipeCollection;
    getCurrentRecipe(): RecipeDisplayId;
    getDisplayStack(): ItemStack;
    getTooltipText(displayStack: ItemStack): Component[];
    getWidth(): number;
    // private hasMultipleRecipes(): boolean;
    init(collection: RecipeCollection, isFiltering: boolean, page: RecipeBookPage, resolutionContext: ContextMap): void;
    isOnlyOption(): boolean;
    isValidClickButton(buttonInfo: MouseButtonInfo): boolean;
    updateWidgetNarration(output: NarrationElementOutput): void;
}