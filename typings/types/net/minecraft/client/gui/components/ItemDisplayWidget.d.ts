import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemDisplayWidget extends AbstractWidget {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(minecraft: Minecraft, offsetX: number, offsetY: number, width: number, height: number, message: Component, itemStack: ItemStack, decorations: boolean, tooltip: boolean)
    // private decorations: boolean;
    // private itemStack: ItemStack;
    // private minecraft: Minecraft;
    // private offsetX: number;
    // private offsetY: number;
    readonly tooltip: boolean;
    extractTooltip(graphics: GuiGraphicsExtractor, x: number, y: number): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}