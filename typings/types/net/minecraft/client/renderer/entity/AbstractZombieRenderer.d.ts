import type { HumanoidModel$ArmPose } from '../../../../../net/minecraft/client/model/HumanoidModel$ArmPose.d.ts'
import type { ZombieModel } from '../../../../../net/minecraft/client/model/monster/zombie/ZombieModel.d.ts'
import type { ArmorModelSet } from '../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HumanoidMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/HumanoidMobRenderer.d.ts'
import type { HumanoidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ZombieRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ZombieRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { HumanoidArm } from '../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Zombie } from '../../../../../net/minecraft/world/entity/monster/zombie/Zombie.d.ts'
export abstract class AbstractZombieRenderer<T extends Zombie, S extends ZombieRenderState, M extends ZombieModel<S>> extends HumanoidMobRenderer<T, S, M> {
    static NAMETAG_SCALE: number;
    static extractHumanoidRenderState(paramentity: LivingEntity, paramstate: HumanoidRenderState, parampartialTicks: number, paramitemModelResolver: ItemModelResolver): void;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, model: M, babyModel: M, armorSet: ArmorModelSet<M>, babyArmorSet: ArmorModelSet<M>)
    extractRenderState(entity: T, state: S, partialTicks: number): void;
    getArmPose(mob: T, arm: HumanoidArm): HumanoidModel$ArmPose;
    getTextureLocation(state: S): Identifier;
    isShaking(state: S): boolean;
}