import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ServerLevelAccessor } from '../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
export interface WorldGenLevel extends Object, ServerLevelAccessor{
    addFreshEntityWithPassengers(entity: Entity): void;
    ensureCanWrite(pos: BlockPos): boolean;
    getSeed(): number;
    setCurrentlyGenerating(currentlyGenerating: () => string): void;
}