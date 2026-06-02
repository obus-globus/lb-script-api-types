import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Pose } from '../../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { ResolvableProfile } from '../../../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
import type { SkullBlock$Type } from '../../../../../../net/minecraft/world/level/block/SkullBlock$Type.d.ts'
export class LivingEntityRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    ageScale: number;
    bedOrientation: Direction;
    bodyRot: number;
    deathTime: number;
    hasRedOverlay: boolean;
    headItem: ItemStackRenderState;
    isAutoSpinAttack: boolean;
    isBaby: boolean;
    isFullyFrozen: boolean;
    isInWater: boolean;
    isInvisibleToPlayer: boolean;
    isUpsideDown: boolean;
    pose: Pose;
    scale: number;
    ticksSinceKineticHitFeedback: number;
    walkAnimationPos: number;
    walkAnimationSpeed: number;
    wornHeadAnimationPos: number;
    wornHeadProfile: ResolvableProfile;
    wornHeadType: SkullBlock$Type;
    xRot: number;
    yRot: number;
    hasPose(pose: Pose): boolean;
}