import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractContainerScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MobEffectInstance } from '../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
export class EffectsInInventory extends Object {
    static SPACING: number;
    static SPRITE_SQUARE_SIZE: number;
    constructor(screen: AbstractContainerScreen<any>)
    // private minecraft: Minecraft;
    // private screen: AbstractContainerScreen<any>;
    canSeeEffects(): boolean;
    // private extractBackground(graphics: GuiGraphicsExtractor, font: Font, effectName: Component, duration: Component, x0: number, y0: number, isAmbient: boolean, maxTextureWidth: number): number;
    // private extractEffects(graphics: GuiGraphicsExtractor, activeEffects: MobEffectInstance[], x0: number, yStep: number, mouseX: number, mouseY: number, maxWidth: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    // private extractText(graphics: GuiGraphicsExtractor, effectText: Component, duration: Component, font: Font, x0: number, y0: number, textureWidth: number, yStep: number, mouseX: number, mouseY: number): void;
    // private getEffectName(effect: MobEffectInstance): Component;
}