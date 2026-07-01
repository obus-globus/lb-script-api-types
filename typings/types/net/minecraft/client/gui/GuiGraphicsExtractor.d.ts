import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Window } from '../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { CursorType } from '../../../../com/mojang/blaze3d/platform/cursor/CursorType.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractorAddition } from '../../../../net/ccbluex/liquidbounce/additions/GuiGraphicsExtractorAddition.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ActiveTextCollector } from '../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { ActiveTextCollector$Parameters } from '../../../../net/minecraft/client/gui/ActiveTextCollector$Parameters.d.ts'
import type { Font } from '../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor$HoveredTextEffects } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor$HoveredTextEffects.d.ts'
import type { GuiGraphicsExtractor$ScissorStack } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor$ScissorStack.d.ts'
import type { AbstractWidget } from '../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Renderable } from '../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { TextureSetup } from '../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { ClientTooltipComponent } from '../../../../net/minecraft/client/gui/screens/inventory/tooltip/ClientTooltipComponent.d.ts'
import type { ClientTooltipPositioner } from '../../../../net/minecraft/client/gui/screens/inventory/tooltip/ClientTooltipPositioner.d.ts'
import type { Model$Simple } from '../../../../net/minecraft/client/model/Model$Simple.d.ts'
import type { BannerFlagModel } from '../../../../net/minecraft/client/model/object/banner/BannerFlagModel.d.ts'
import type { BookModel } from '../../../../net/minecraft/client/model/object/book/BookModel.d.ts'
import type { EntityRenderState } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { MapRenderState } from '../../../../net/minecraft/client/renderer/state/MapRenderState.d.ts'
import type { GuiRenderState } from '../../../../net/minecraft/client/renderer/state/gui/GuiRenderState.d.ts'
import type { TextureAtlas } from '../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { GuiSpriteScaling$NineSlice } from '../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling$NineSlice.d.ts'
import type { SpriteGetter } from '../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { FormattedText } from '../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { ResultField } from '../../../../net/minecraft/util/profiling/ResultField.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TooltipComponent } from '../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
import type { DyeColor } from '../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { BannerPatternLayers } from '../../../../net/minecraft/world/level/block/entity/BannerPatternLayers.d.ts'
import type { Matrix3x2fStack } from '../../../../org/joml/Matrix3x2fStack.d.ts'
import type { Quaternionfc } from '../../../../org/joml/Quaternionfc.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class GuiGraphicsExtractor extends Object implements GuiGraphicsExtractorAddition {
    constructor(minecraft: Minecraft, guiRenderState: GuiRenderState, mouseX: number, mouseY: number)
    // private clickableTextStyle: Style;
    // private deferredTooltip: () => void;
    guiRenderState: GuiRenderState;
    // private guiSprites: TextureAtlas;
    // private hoveredTextStyle: Style;
    // private minecraft: Minecraft;
    // private mouseX: number;
    // private mouseY: number;
    // private pendingCursor: CursorType;
    // private pose: Matrix3x2fStack;
    readonly preeditOverlay: Renderable;
    scissorStack: GuiGraphicsExtractor$ScissorStack;
    // private sprites: SpriteGetter;
    applyCursor(window: Window): void;
    bannerPattern(flag: BannerFlagModel, baseColor: DyeColor, resultBannerPatterns: BannerPatternLayers, x0: number, y0: number, x1: number, y1: number): void;
    blit(renderPipeline: RenderPipeline, texture: Identifier, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number): void;
    blit(renderPipeline: RenderPipeline, texture: Identifier, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, color: number): void;
    blit(renderPipeline: RenderPipeline, texture: Identifier, x: number, y: number, u: number, v: number, width: number, height: number, srcWidth: number, srcHeight: number, textureWidth: number, textureHeight: number): void;
    blit(renderPipeline: RenderPipeline, texture: Identifier, x: number, y: number, u: number, v: number, width: number, height: number, srcWidth: number, srcHeight: number, textureWidth: number, textureHeight: number, color: number): void;
    blit(textureView: GpuTextureView, sampler: GpuSampler, x0: number, y0: number, x1: number, y1: number, u0: number, u1: number, v0: number, v1: number): void;
    blit(location: Identifier, x0: number, y0: number, x1: number, y1: number, u0: number, u1: number, v0: number, v1: number): void;
    // private blitNineSliceInnerSegment(renderPipeline: RenderPipeline, nineSlice: GuiSpriteScaling$NineSlice, sprite: TextureAtlasSprite, x: number, y: number, width: number, height: number, textureX: number, textureY: number, textureWidth: number, textureHeight: number, spriteWidth: number, spriteHeight: number, color: number): void;
    // private blitNineSlicedSprite(renderPipeline: RenderPipeline, sprite: TextureAtlasSprite, nineSlice: GuiSpriteScaling$NineSlice, x: number, y: number, width: number, height: number, color: number): void;
    blitSprite(renderPipeline: RenderPipeline, sprite: TextureAtlasSprite, x: number, y: number, width: number, height: number): void;
    blitSprite(renderPipeline: RenderPipeline, sprite: TextureAtlasSprite, x: number, y: number, width: number, height: number, color: number): void;
    // private blitSprite(renderPipeline: RenderPipeline, sprite: TextureAtlasSprite, spriteWidth: number, spriteHeight: number, textureX: number, textureY: number, x: number, y: number, width: number, height: number, color: number): void;
    blitSprite(renderPipeline: RenderPipeline, location: Identifier, x: number, y: number, width: number, height: number): void;
    blitSprite(renderPipeline: RenderPipeline, location: Identifier, x: number, y: number, width: number, height: number, alpha: number): void;
    blitSprite(renderPipeline: RenderPipeline, location: Identifier, x: number, y: number, width: number, height: number, color: number): void;
    blitSprite(renderPipeline: RenderPipeline, location: Identifier, spriteWidth: number, spriteHeight: number, textureX: number, textureY: number, x: number, y: number, width: number, height: number): void;
    blitSprite(renderPipeline: RenderPipeline, location: Identifier, spriteWidth: number, spriteHeight: number, textureX: number, textureY: number, x: number, y: number, width: number, height: number, color: number): void;
    // private blitTiledSprite(renderPipeline: RenderPipeline, sprite: TextureAtlasSprite, x: number, y: number, width: number, height: number, textureX: number, textureY: number, tileWidth: number, tileHeight: number, spriteWidth: number, spriteHeight: number, color: number): void;
    blurBeforeThisStratum(): void;
    book(bookModel: BookModel, texture: Identifier, scale: number, open: number, flip: number, x0: number, y0: number, x1: number, y1: number): void;
    centeredText(font: Font, str: string, x: number, y: number, color: number): void;
    centeredText(font: Font, text: Component, x: number, y: number, color: number): void;
    centeredText(font: Font, text: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, x: number, y: number, color: number): void;
    // private componentHoverEffect(font: Font, hoveredStyle: Style, xMouse: number, yMouse: number): void;
    containsPointInScissor(x: number, y: number): boolean;
    // private createDefaultTextParameters(opacity: number): ActiveTextCollector$Parameters;
    disableScissor(): void;
    enableScissor(x0: number, y0: number, x1: number, y1: number): void;
    entity(renderState: EntityRenderState, scale: number, translation: Vector3fc, rotation: Quaternionfc, overrideCameraAngle: Quaternionfc, x0: number, y0: number, x1: number, y1: number): void;
    extractDeferredElements(mouseX: number, mouseY: number, a: number): void;
    fakeItem(itemStack: ItemStack, x: number, y: number): void;
    fakeItem(itemStack: ItemStack, x: number, y: number, seed: number): void;
    fill(pipeline: RenderPipeline, x0: number, y0: number, x1: number, y1: number, col: number): void;
    fill(renderPipeline: RenderPipeline, textureSetup: TextureSetup, x0: number, y0: number, x1: number, y1: number): void;
    fill(x0: number, y0: number, x1: number, y1: number, col: number): void;
    fillGradient(x0: number, y0: number, x1: number, y1: number, col1: number, col2: number): void;
    getSprite(sprite: SpriteId): TextureAtlasSprite;
    guiHeight(): number;
    guiWidth(): number;
    horizontalLine(x0: number, x1: number, y: number, col: number): void;
    // private innerBlit(pipeline: RenderPipeline, textureView: GpuTextureView, sampler: GpuSampler, x0: number, y0: number, x1: number, y1: number, u0: number, u1: number, v0: number, v1: number, color: number): void;
    // private innerBlit(renderPipeline: RenderPipeline, location: Identifier, x0: number, x1: number, y0: number, y1: number, u0: number, u1: number, v0: number, v1: number, color: number): void;
    // private innerFill(renderPipeline: RenderPipeline, textureSetup: TextureSetup, x0: number, y0: number, x1: number, y1: number, color1: number, color2: number): void;
    // private innerTiledBlit(pipeline: RenderPipeline, textureView: GpuTextureView, sampler: GpuSampler, tileWidth: number, tileHeight: number, x0: number, y0: number, x1: number, y1: number, u0: number, u1: number, v0: number, v1: number, color: number): void;
    item(owner: LivingEntity, itemStack: ItemStack, x: number, y: number, seed: number): void;
    // private item(owner: LivingEntity, level: Level, itemStack: ItemStack, x: number, y: number, seed: number): void;
    item(itemStack: ItemStack, x: number, y: number): void;
    item(itemStack: ItemStack, x: number, y: number, seed: number): void;
    // private itemBar(itemStack: ItemStack, x: number, y: number): void;
    // private itemCooldown(itemStack: ItemStack, x: number, y: number): void;
    // private itemCount(font: Font, itemStack: ItemStack, x: number, y: number, countText: string): void;
    itemDecorations(font: Font, itemStack: ItemStack, x: number, y: number): void;
    itemDecorations(font: Font, itemStack: ItemStack, x: number, y: number, countText: string): void;
    liquidbounce$drawCooldownProgress(arg0: ItemStack, arg1: number, arg2: number): void;
    liquidbounce$drawItemBar(arg0: ItemStack, arg1: number, arg2: number): void;
    liquidbounce$drawStackCount(arg0: Font, arg1: ItemStack, arg2: number, arg3: number, arg4: string | null): void;
    map(mapRenderState: MapRenderState): void;
    nextStratum(): void;
    outline(x: number, y: number, width: number, height: number, color: number): void;
    pose(): Matrix3x2fStack;
    profilerChart(chartData: ResultField[], x0: number, y0: number, x1: number, y1: number): void;
    requestCursor(cursorType: CursorType): void;
    setComponentTooltipForNextFrame(font: Font, lines: Component[], xo: number, yo: number): void;
    setComponentTooltipForNextFrame(font: Font, lines: Component[], xo: number, yo: number, style: Identifier): void;
    setPreeditOverlay(preeditOverlay: Renderable): void;
    setTooltipForNextFrame(formattedCharSequences: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[], x: number, y: number): void;
    setTooltipForNextFrame(font: Font, lines: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[], xo: number, yo: number): void;
    setTooltipForNextFrame(font: Font, lines: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[], xo: number, yo: number, style: Identifier): void;
    setTooltipForNextFrame(font: Font, texts: Component[], optionalImage: Optional<TooltipComponent>, xo: number, yo: number): void;
    setTooltipForNextFrame(font: Font, texts: Component[], optionalImage: Optional<TooltipComponent>, xo: number, yo: number, style: Identifier): void;
    setTooltipForNextFrame(font: Font, tooltip: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[], component: Optional<TooltipComponent>, positioner: ClientTooltipPositioner, xo: number, yo: number, replaceExisting: boolean, style: Identifier): void;
    setTooltipForNextFrame(font: Font, tooltip: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[], positioner: ClientTooltipPositioner, xo: number, yo: number, replaceExisting: boolean): void;
    setTooltipForNextFrame(font: Font, text: Component, xo: number, yo: number): void;
    setTooltipForNextFrame(font: Font, text: Component, xo: number, yo: number, style: Identifier): void;
    setTooltipForNextFrame(font: Font, itemStack: ItemStack, xo: number, yo: number): void;
    setTooltipForNextFrame(component: Component, x: number, y: number): void;
    // private setTooltipForNextFrameInternal(font: Font, lines: ClientTooltipComponent[], xo: number, yo: number, positioner: ClientTooltipPositioner, style: Identifier, replaceExisting: boolean): void;
    skin(playerModel: Model$Simple, texture: Identifier, scale: number, rotationX: number, rotationY: number, pivotY: number, x0: number, y0: number, x1: number, y1: number): void;
    text(font: Font, str: string, x: number, y: number, color: number): void;
    text(font: Font, str: string, x: number, y: number, color: number, dropShadow: boolean): void;
    text(font: Font, str: Component, x: number, y: number, color: number): void;
    text(font: Font, str: Component, x: number, y: number, color: number, dropShadow: boolean): void;
    text(font: Font, str: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, x: number, y: number, color: number): void;
    text(font: Font, str: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, x: number, y: number, color: number, dropShadow: boolean): void;
    textHighlight(x0: number, y0: number, x1: number, y1: number, invertText: boolean): void;
    textRenderer(): ActiveTextCollector;
    textRenderer(hoveredTextEffects: GuiGraphicsExtractor$HoveredTextEffects): ActiveTextCollector;
    textRenderer(hoveredTextEffects: GuiGraphicsExtractor$HoveredTextEffects, additionalHoverStyleConsumer: (param0: Style) => void): ActiveTextCollector;
    textRendererForWidget(owner: AbstractWidget, hoveredTextEffects: GuiGraphicsExtractor$HoveredTextEffects): ActiveTextCollector;
    textWithBackdrop(font: Font, str: Component, textX: number, textY: number, textWidth: number, textColor: number): void;
    textWithWordWrap(font: Font, string: FormattedText, x: number, y: number, width: number, col: number): void;
    textWithWordWrap(font: Font, string: FormattedText, x: number, y: number, width: number, col: number, dropShadow: boolean): void;
    tooltip(font: Font, lines: ClientTooltipComponent[], xo: number, yo: number, positioner: ClientTooltipPositioner, style: Identifier): void;
    verticalLine(x: number, y0: number, y1: number, col: number): void;
}