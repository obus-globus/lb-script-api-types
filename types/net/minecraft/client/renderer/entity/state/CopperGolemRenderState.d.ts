import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { ArmedEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { CopperGolemState } from '../../../../../../net/minecraft/world/entity/animal/golem/CopperGolemState.d.ts'
import type { WeatheringCopper$WeatherState } from '../../../../../../net/minecraft/world/level/block/WeatheringCopper$WeatherState.d.ts'
export class CopperGolemRenderState extends ArmedEntityRenderState {
    static NO_OUTLINE: number;
    static extractArmedEntityRenderState(paramentity: LivingEntity, paramstate: ArmedEntityRenderState, paramitemModelResolver: ItemModelResolver, parampartialTicks: number): void;
    constructor()
    blockOnAntenna: BlockModelRenderState;
    copperGolemState: CopperGolemState;
    idleAnimationState: AnimationState;
    interactionDropItem: AnimationState;
    interactionDropNoItem: AnimationState;
    interactionGetItem: AnimationState;
    interactionGetNoItem: AnimationState;
    weathering: WeatheringCopper$WeatherState;
}