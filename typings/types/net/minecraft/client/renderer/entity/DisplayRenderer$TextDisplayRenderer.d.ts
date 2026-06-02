import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { DisplayRenderer } from '../../../../../net/minecraft/client/renderer/entity/DisplayRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { TextDisplayEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/TextDisplayEntityRenderState.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Display$TextDisplay } from '../../../../../net/minecraft/world/entity/Display$TextDisplay.d.ts'
import type { Display$TextDisplay$CachedInfo } from '../../../../../net/minecraft/world/entity/Display$TextDisplay$CachedInfo.d.ts'
import type { Display$TextDisplay$TextRenderState } from '../../../../../net/minecraft/world/entity/Display$TextDisplay$TextRenderState.d.ts'
export class DisplayRenderer$TextDisplayRenderer extends DisplayRenderer<Display$TextDisplay, Display$TextDisplay$TextRenderState, TextDisplayEntityRenderState> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    readonly font: Font;
    createRenderState(): TextDisplayEntityRenderState;
    extractRenderState(entity: Display$TextDisplay, state: TextDisplayEntityRenderState, partialTicks: number): void;
    // private splitLines(input: Component, width: number): Display$TextDisplay$CachedInfo;
    submitInner(state: TextDisplayEntityRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, interpolationProgress: number): void;
}