import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { RecipeToast$Entry } from '../../../../../../net/minecraft/client/gui/components/toasts/RecipeToast$Entry.d.ts'
import type { Toast } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast.d.ts'
import type { Toast$Visibility } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast$Visibility.d.ts'
import type { ToastManager } from '../../../../../../net/minecraft/client/gui/components/toasts/ToastManager.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { RecipeDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
export class RecipeToast extends Object implements Toast {
    static DEFAULT_WIDTH: number;
    static NO_TOKEN: Object;
    static SLOT_HEIGHT: number;
    static addOrUpdate(paramtoastManager: ToastManager, paramrecipe: RecipeDisplay): void;
    private constructor()
    // private changed: boolean;
    // private displayedRecipeIndex: number;
    // private lastChanged: number;
    // private recipeItems: RecipeToast$Entry[];
    readonly wantedVisibility: Toast$Visibility;
    // private addItem(craftingStation: ItemStack, unlockedItem: ItemStack): void;
    extractRenderState(graphics: GuiGraphicsExtractor, font: Font, fullyVisibleForMs: number): void;
    getSoundEvent(): SoundEvent;
    getToken(): Object;
    getWantedVisibility(): Toast$Visibility;
    height(): number;
    occcupiedSlotCount(): number;
    onFinishedRendering(): void;
    update(manager: ToastManager, fullyVisibleForMs: number): void;
    width(): number;
    xPos(screenWidth: number, visiblePortion: number): number;
    yPos(firstSlotIndex: number): number;
}