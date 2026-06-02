import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { MapRenderer } from '../../../../../net/minecraft/client/renderer/MapRenderer.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { ItemFrameRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ItemFrameRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ItemFrame } from '../../../../../net/minecraft/world/entity/decoration/ItemFrame.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ItemFrameRenderer<T extends ItemFrame> extends EntityRenderer<T, ItemFrameRenderState> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static BRIGHT_MAP_LIGHT_ADJUSTMENT: number;
    static GLOW_FRAME_BRIGHTNESS: number;
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private blockModelResolver: BlockModelResolver;
    // private itemModelResolver: ItemModelResolver;
    // private mapRenderer: MapRenderer;
    createRenderState(): ItemFrameRenderState;
    extractRenderState(entity: T, state: ItemFrameRenderState, partialTicks: number): void;
    getBlockLightLevel(entity: T, blockPos: BlockPos): number;
    // private getLightCoords(isGlowFrame: boolean, glowLightCoords: number, originalLightCoords: number): number;
    getNameTag(entity: T): Component;
    getRenderOffset(state: ItemFrameRenderState): Vec3;
    shouldShowName(entity: T, distanceToCameraSq: number): boolean;
    submit(state: ItemFrameRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}