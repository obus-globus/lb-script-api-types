import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ImageWidget } from '../../../../../net/minecraft/client/gui/components/ImageWidget.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ImageWidget$Texture extends ImageWidget {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static sprite(paramwidth: number, paramheight: number, paramsprite: Identifier): ImageWidget;
    static texture(paramwidth: number, paramheight: number, paramtexture: Identifier, paramtextureWidth: number, paramtextureHeight: number): ImageWidget;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, texture: Identifier, textureWidth: number, textureHeight: number)
    // private texture: Identifier;
    // private textureHeight: number;
    // private textureWidth: number;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    updateResource(identifier: Identifier): void;
}