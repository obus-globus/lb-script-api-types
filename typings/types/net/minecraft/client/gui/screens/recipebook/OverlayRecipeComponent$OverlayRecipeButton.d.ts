import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { OverlayRecipeComponent } from '../../../../../../net/minecraft/client/gui/screens/recipebook/OverlayRecipeComponent.d.ts'
import type { OverlayRecipeComponent$OverlayRecipeButton$Pos } from '../../../../../../net/minecraft/client/gui/screens/recipebook/OverlayRecipeComponent$OverlayRecipeButton$Pos.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RecipeDisplayId } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
export abstract class OverlayRecipeComponent$OverlayRecipeButton extends AbstractWidget {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: OverlayRecipeComponent, x: number, y: number, recipe: RecipeDisplayId, isCraftable: boolean, slots: OverlayRecipeComponent$OverlayRecipeButton$Pos[])
    // private isCraftable: boolean;
    // private recipe: RecipeDisplayId;
    // private slots: OverlayRecipeComponent$OverlayRecipeButton$Pos[];
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getSprite(isCraftable: boolean): Identifier;
    updateWidgetNarration(output: NarrationElementOutput): void;
}