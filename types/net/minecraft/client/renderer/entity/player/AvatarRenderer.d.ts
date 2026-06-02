import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ClientAvatarEntity } from '../../../../../../net/minecraft/client/entity/ClientAvatarEntity.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { PlayerModel } from '../../../../../../net/minecraft/client/model/player/PlayerModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderer } from '../../../../../../net/minecraft/client/renderer/entity/LivingEntityRenderer.d.ts'
import type { AvatarRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/AvatarRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { CameraRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Avatar } from '../../../../../../net/minecraft/world/entity/Avatar.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class AvatarRenderer<AvatarlikeEntity extends Avatar & ClientAvatarEntity> extends LivingEntityRenderer<AvatarlikeEntity, AvatarRenderState, PlayerModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    static isPlayerUpsideDown(paramplayer: Player): boolean;
    constructor(context: EntityRendererProvider$Context, slimSteve: boolean)
    createRenderState(): AvatarRenderState;
    // private extractCapeState(entity: AvatarlikeEntity, state: AvatarRenderState, partialTicks: number): void;
    // private extractFlightData(entity: AvatarlikeEntity, state: AvatarRenderState, partialTicks: number): void;
    extractRenderState(entity: AvatarlikeEntity, state: AvatarRenderState, partialTicks: number): void;
    getRenderOffset(state: AvatarRenderState): Vec3;
    getTextureLocation(state: AvatarRenderState): Identifier;
    isEntityUpsideDown(mob: AvatarlikeEntity): boolean;
    // private renderHand(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, skinTexture: Identifier, arm: ModelPart, hasSleeve: boolean): void;
    renderLeftHand(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, skinTexture: Identifier, hasSleeve: boolean): void;
    renderRightHand(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, skinTexture: Identifier, hasSleeve: boolean): void;
    scale(state: AvatarRenderState, poseStack: PoseStack): void;
    setupRotations(state: AvatarRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
    shouldRenderLayers(state: AvatarRenderState): boolean;
    shouldShowName(entity: AvatarlikeEntity, distanceToCameraSq: number): boolean;
    submitNameDisplay(state: AvatarRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}