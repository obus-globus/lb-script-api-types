import type { ArmedEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { HumanoidRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Parrot$Variant } from '../../../../../../net/minecraft/world/entity/animal/parrot/Parrot$Variant.d.ts'
import type { PlayerSkin } from '../../../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
export class AvatarRenderState extends HumanoidRenderState {
    static NO_OUTLINE: number;
    static extractArmedEntityRenderState(paramentity: LivingEntity, paramstate: ArmedEntityRenderState, paramitemModelResolver: ItemModelResolver, parampartialTicks: number): void;
    constructor()
    arrowCount: number;
    capeFlap: number;
    capeLean: number;
    capeLean2: number;
    fallFlyingTimeInTicks: number;
    flyingYRot: number;
    heldOnHead: ItemStackRenderState;
    id: number;
    isSpectator: boolean;
    parrotOnLeftShoulder: Parrot$Variant;
    parrotOnRightShoulder: Parrot$Variant;
    shouldApplyFlyingYRot: boolean;
    showCape: boolean;
    showExtraEars: boolean;
    showHat: boolean;
    showJacket: boolean;
    showLeftPants: boolean;
    showLeftSleeve: boolean;
    showRightPants: boolean;
    showRightSleeve: boolean;
    skin: PlayerSkin;
    stingerCount: number;
    fallFlyingScale(): number;
}