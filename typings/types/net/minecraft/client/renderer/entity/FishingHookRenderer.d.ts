import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { FishingHookRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/FishingHookRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { HumanoidArm } from '../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FishingHook } from '../../../../../net/minecraft/world/entity/projectile/FishingHook.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class FishingHookRenderer extends EntityRenderer<FishingHook, FishingHookRenderState> {
    static NAMETAG_SCALE: number;
    static getHoldingArm(paramowner: Player): HumanoidArm;
    constructor(context: EntityRendererProvider$Context)
    affectedByCulling(entity: FishingHook): boolean;
    createRenderState(): FishingHookRenderState;
    createRenderState(entity: FishingHook, partialTicks: number): FishingHookRenderState;
    extractRenderState(entity: FishingHook, state: FishingHookRenderState, partialTicks: number): void;
    // private getPlayerHandPos(owner: Player, swing: number, partialTicks: number): Vec3;
    shouldRender(entity: FishingHook, culler: Frustum, camX: number, camY: number, camZ: number): boolean;
    submit(state: FishingHookRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}