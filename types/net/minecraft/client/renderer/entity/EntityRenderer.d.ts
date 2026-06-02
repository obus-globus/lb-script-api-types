import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityRendererAccessor } from '../../../../../net/caffeinemc/mods/sodium/mixin/core/render/world/EntityRendererAccessor.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { EntityRenderDispatcher } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export abstract class EntityRenderer<T extends Entity, S extends EntityRenderState> extends Object implements EntityRendererAccessor {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private entityRenderDispatcher: EntityRenderDispatcher;
    readonly font: Font;
    // private shadowRadius: number;
    // private shadowStrength: number;
    affectedByCulling(entity: T): boolean;
    createRenderState(): S;
    createRenderState(entity: T, partialTicks: number): S;
    extractRenderState(entity: T, state: S, partialTicks: number): void;
    // private extractShadow(state: S, minecraft: Minecraft, level: Level): void;
    // private extractShadowPiece(state: S, level: Level, pow: number, pos: BlockPos$MutableBlockPos, chunk: ChunkAccess): void;
    finalizeRenderState(entity: T, state: S): void;
    getBlockLightLevel(entity: T, blockPos: BlockPos): number;
    getBoundingBoxForCulling(entity: T): AABB;
    getFont(): Font;
    getNameTag(entity: T): Component;
    getPackedLightCoords(entity: T, partialTickTime: number): number;
    getRenderOffset(state: S): Vec3;
    getShadowRadius(state: S): number;
    getShadowStrength(state: S): number;
    getSkyLightLevel(entity: T, blockPos: BlockPos): number;
    // private renderLabel(arg0: Entity, arg1: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean, arg2: PoseStack, arg3: SubmitNodeCollector, arg4: number): void;
    shouldRender(entity: T, culler: Frustum, camX: number, camY: number, camZ: number): boolean;
    shouldShowName(entity: T, distanceToCameraSq: number): boolean;
    submit(state: S, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    submitNameDisplay(state: S, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    submitNameDisplay(state: S, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState, offset: number): void;
}