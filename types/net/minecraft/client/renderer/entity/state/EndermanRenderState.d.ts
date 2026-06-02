import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { ArmedEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { HumanoidRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class EndermanRenderState extends HumanoidRenderState {
    static NO_OUTLINE: number;
    static extractArmedEntityRenderState(paramentity: LivingEntity, paramstate: ArmedEntityRenderState, paramitemModelResolver: ItemModelResolver, parampartialTicks: number): void;
    constructor()
    carriedBlock: BlockModelRenderState;
    isCreepy: boolean;
}