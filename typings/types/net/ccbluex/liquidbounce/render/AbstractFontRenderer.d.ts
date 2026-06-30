import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractFontRenderer$DrawParameters } from '../../../../net/ccbluex/liquidbounce/render/AbstractFontRenderer$DrawParameters.d.ts'
import type { WorldRenderEnvironment } from '../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
import type { ProcessedText } from '../../../../net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class AbstractFontRenderer<T extends ProcessedText> extends Object {
    constructor()
    readonly height: number;
    readonly scaleToVanillaFont: number;
    readonly size: number;
    draw(ctx: WorldRenderEnvironment, text: T, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    draw(ctx: WorldRenderEnvironment, text: T, parameters: AbstractFontRenderer$DrawParameters): number;
    draw(ctx: WorldRenderEnvironment, text: Component, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    draw(ctx: GuiGraphicsExtractor, text: T, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    draw(ctx: GuiGraphicsExtractor, text: T, parameters: AbstractFontRenderer$DrawParameters): number;
    draw(ctx: GuiGraphicsExtractor, text: Component, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    getStringWidth(text: ProcessedText, shadow: boolean): number;
    process(text: string, defaultColor: Color4b): T;
    process(text: Component, defaultColor: Color4b): T;
}