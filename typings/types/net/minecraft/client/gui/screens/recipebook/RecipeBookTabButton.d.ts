import type { ClientRecipeBook } from '../../../../../../net/minecraft/client/ClientRecipeBook.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button$Builder } from '../../../../../../net/minecraft/client/gui/components/Button$Builder.d.ts'
import type { Button$OnPress } from '../../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { ImageButton } from '../../../../../../net/minecraft/client/gui/components/ImageButton.d.ts'
import type { RecipeBookComponent$TabInfo } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeBookComponent$TabInfo.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ExtendedRecipeBookCategory } from '../../../../../../net/minecraft/world/item/crafting/ExtendedRecipeBookCategory.d.ts'
export class RecipeBookTabButton extends ImageButton {
    static BIG_WIDTH: number;
    static DEFAULT_HEIGHT: number;
    static DEFAULT_SPACING: number;
    static DEFAULT_WIDTH: number;
    static HEIGHT: number;
    static SMALL_WIDTH: number;
    static WIDTH: number;
    static builder(parammessage: Component, paramonPress: Button$OnPress): Button$Builder;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, tabInfo: RecipeBookComponent$TabInfo, onPress: Button$OnPress)
    // private animationTime: number;
    // private selected: boolean;
    // private tabInfo: RecipeBookComponent$TabInfo;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private extractIcon(graphics: GuiGraphicsExtractor): void;
    getCategory(): ExtendedRecipeBookCategory;
    handleCursor(graphics: GuiGraphicsExtractor): void;
    select(): void;
    startAnimation(recipeBook: ClientRecipeBook, isFiltering: boolean): void;
    unselect(): void;
    updateVisibility(book: ClientRecipeBook): boolean;
}