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
    /**
     * Scales this renderer's text metrics to vanilla's 9px GUI font line height.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/AbstractFontRenderer.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/render/AbstractFontRenderer.kt:42}
     */
    readonly scaleToVanillaFont: number;
    readonly size: number;
    draw(ctx: WorldRenderEnvironment, text: T, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    draw(ctx: WorldRenderEnvironment, text: T, parameters: AbstractFontRenderer$DrawParameters): number;
    draw(ctx: WorldRenderEnvironment, text: Component, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    draw(ctx: GuiGraphicsExtractor, text: T, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    draw(ctx: GuiGraphicsExtractor, text: T, parameters: AbstractFontRenderer$DrawParameters): number;
    draw(ctx: GuiGraphicsExtractor, text: Component, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    /**
     * Approximates the width of a text. Accurate except for obfuscated (`§k`) formatting
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/AbstractFontRenderer.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/render/AbstractFontRenderer.kt:97}
     */
    getStringWidth(text: ProcessedText, shadow: boolean): number;
    /**
     * @param defaultColor The color of the font when no minecraft-markup applies
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/AbstractFontRenderer.kt#L86 | src/main/kotlin/net/ccbluex/liquidbounce/render/AbstractFontRenderer.kt:86}
     */
    process(text: string, defaultColor: Color4b): T;
    process(text: Component, defaultColor: Color4b): T;
}