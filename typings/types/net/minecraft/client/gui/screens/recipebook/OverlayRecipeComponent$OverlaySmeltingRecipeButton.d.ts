import type { OverlayRecipeComponent$OverlayRecipeButton } from '../../../../../../net/minecraft/client/gui/screens/recipebook/OverlayRecipeComponent$OverlayRecipeButton.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ContextMap } from '../../../../../../net/minecraft/util/context/ContextMap.d.ts'
import type { RecipeDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { RecipeDisplayId } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
export class OverlayRecipeComponent$OverlaySmeltingRecipeButton extends OverlayRecipeComponent$OverlayRecipeButton {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: OverlayRecipeComponent$OverlaySmeltingRecipeButton, x: number, y: number, id: RecipeDisplayId, recipe: RecipeDisplay, context: ContextMap, isCraftable: boolean)
    getSprite(isCraftable: boolean): Identifier;
}