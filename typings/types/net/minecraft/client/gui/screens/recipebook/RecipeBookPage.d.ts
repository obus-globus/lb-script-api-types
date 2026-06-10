import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientRecipeBook } from '../../../../../../net/minecraft/client/ClientRecipeBook.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { ImageButton } from '../../../../../../net/minecraft/client/gui/components/ImageButton.d.ts'
import type { OverlayRecipeComponent } from '../../../../../../net/minecraft/client/gui/screens/recipebook/OverlayRecipeComponent.d.ts'
import type { RecipeBookComponent } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeBookComponent.d.ts'
import type { RecipeButton } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeButton.d.ts'
import type { RecipeCollection } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeCollection.d.ts'
import type { SlotSelectTime } from '../../../../../../net/minecraft/client/gui/screens/recipebook/SlotSelectTime.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { RecipeDisplayId } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
export class RecipeBookPage extends Object {
    static ITEMS_PER_PAGE: number;
    constructor(parent: RecipeBookComponent<Object>, slotSelectTime: () => number, isFurnaceMenu: boolean)
    // private backButton: ImageButton;
    // private buttons: RecipeButton[];
    // private currentPage: number;
    // private forwardButton: ImageButton;
    // private hoveredButton: RecipeButton;
    // private isFiltering: boolean;
    readonly lastClickedRecipe: RecipeDisplayId;
    readonly lastClickedRecipeCollection: RecipeCollection;
    // private minecraft: Minecraft;
    // private overlay: OverlayRecipeComponent;
    // private parent: RecipeBookComponent<Object>;
    readonly recipeBook: ClientRecipeBook;
    // private recipeCollections: RecipeCollection[];
    // private totalPages: number;
    extractRenderState(graphics: GuiGraphicsExtractor, xo: number, yo: number, mouseX: number, mouseY: number, a: number): void;
    extractTooltip(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    getLastClickedRecipe(): RecipeDisplayId;
    getLastClickedRecipeCollection(): RecipeCollection;
    getRecipeBook(): ClientRecipeBook;
    init(minecraft: Minecraft, xo: number, yo: number): void;
    listButtons(buttonConsumer: (param0: AbstractWidget) => void): void;
    mouseClicked(event: MouseButtonEvent, xo: number, yo: number, imageWidth: number, imageHeight: number, doubleClick: boolean): boolean;
    recipeShown(recipe: RecipeDisplayId): void;
    setInvisible(): void;
    // private updateArrowButtons(): void;
    // private updateButtonsForPage(): void;
    updateCollections(recipeCollections: RecipeCollection[], resetPage: boolean, isFiltering: boolean): void;
}