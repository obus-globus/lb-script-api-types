import type { IntStack } from '../../../../../../it/unimi/dsi/fastutil/ints/IntStack.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractFontRenderer } from '../../../../../../net/ccbluex/liquidbounce/render/AbstractFontRenderer.d.ts'
import type { AbstractFontRenderer$DrawParameters } from '../../../../../../net/ccbluex/liquidbounce/render/AbstractFontRenderer$DrawParameters.d.ts'
import type { FontFace } from '../../../../../../net/ccbluex/liquidbounce/render/FontFace.d.ts'
import type { WorldRenderEnvironment } from '../../../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
import type { FontGlyphPageManager } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyphPageManager.d.ts'
import type { GlyphDescriptor } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphDescriptor.d.ts'
import type { MinecraftTextProcessor$RecyclingProcessedText } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/MinecraftTextProcessor$RecyclingProcessedText.d.ts'
import type { ProcessedText } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.d.ts'
import type { Color4b } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class FontRenderer extends AbstractFontRenderer<MinecraftTextProcessor$RecyclingProcessedText> {
    constructor(font: FontFace, glyphManager: FontGlyphPageManager, size: number)
    // private ascent: number;
    /**
     * Glyph pages for the style of the font. If an element is null, fall back to `{@link 0}`
     *
     * {@link Font.PLAIN} -> 0 (Must not be null)
     *
     * {@link Font.BOLD} -> 1 (Can be null)
     *
     * {@link Font.ITALIC} -> 2 (Can be null)
     *
     * {@link Font.BOLD} | {@link Font.ITALIC} -> 3 (Can be null)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/FontRenderer.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/FontRenderer.kt:54}
     */
    readonly font: FontFace;
    readonly glyphManager: FontGlyphPageManager;
    readonly height: number;
    // private shadowColor: Color4b;
    readonly size: number;
    // private strikethroughIdxStack: (Object | null)[];
    // private strikethroughOffset: number;
    // private strikethroughThickness: number;
    // private underlineOffset: number;
    // private underlineThickness: number;
    // private underlinesIdxStack: (Object | null)[];
    // private commonDraw(ctx: Object, text: MinecraftTextProcessor$RecyclingProcessedText, parameters: AbstractFontRenderer$DrawParameters): number;
    draw(ctx: WorldRenderEnvironment, text: MinecraftTextProcessor$RecyclingProcessedText, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    draw(ctx: WorldRenderEnvironment, text: MinecraftTextProcessor$RecyclingProcessedText, parameters: AbstractFontRenderer$DrawParameters): number;
    draw(ctx: WorldRenderEnvironment, text: Component, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    draw(ctx: GuiGraphicsExtractor, text: MinecraftTextProcessor$RecyclingProcessedText, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    draw(ctx: GuiGraphicsExtractor, text: MinecraftTextProcessor$RecyclingProcessedText, parameters: AbstractFontRenderer$DrawParameters): number;
    draw(ctx: GuiGraphicsExtractor, text: Component, parameters: (param0: AbstractFontRenderer$DrawParameters) => void): number;
    // private drawChar(ctx: Object, glyph: GlyphDescriptor, x: number, y: number, z: number, scale: number, color: Color4b): void;
    // private drawInternal(ctx: Object, text: ProcessedText, posX: number, posY: number, posZ: number, scale: number, overrideColor: Color4b | null): void;
    // private drawLine(ctx: Object, x0: number, x1: number, y: number, z: number, scale: number, color: Color4b, through: boolean): void;
    getStringWidth(text: ProcessedText, shadow: boolean): number;
    // private loadStrikethroughs(text: ProcessedText): IntStack;
    // private loadUnderlines(text: ProcessedText): IntStack;
    process(text: string, defaultColor: Color4b): MinecraftTextProcessor$RecyclingProcessedText;
    process(text: Component, defaultColor: Color4b): MinecraftTextProcessor$RecyclingProcessedText;
}