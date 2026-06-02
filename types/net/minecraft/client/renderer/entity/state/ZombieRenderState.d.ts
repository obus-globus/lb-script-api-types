import type { ArmedEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { UndeadRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/UndeadRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class ZombieRenderState extends UndeadRenderState {
    static NO_OUTLINE: number;
    static extractArmedEntityRenderState(paramentity: LivingEntity, paramstate: ArmedEntityRenderState, paramitemModelResolver: ItemModelResolver, parampartialTicks: number): void;
    constructor()
    isAggressive: boolean;
    isConverting: boolean;
}