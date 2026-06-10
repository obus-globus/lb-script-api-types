import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbortableIterationConsumer } from '../../../../../../../net/minecraft/util/AbortableIterationConsumer.d.ts'
import type { AbortableIterationConsumer$Continuation } from '../../../../../../../net/minecraft/util/AbortableIterationConsumer$Continuation.d.ts'
import type { ItemEntity } from '../../../../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class ItemEntityLazyIterationConsumer extends Object implements AbortableIterationConsumer<ItemEntity> {
    static forConsumer(paramconsumer: (param0: Object | null) => void): (param0: Object | null) => AbortableIterationConsumer$Continuation;
    constructor(arg0: ItemEntity, arg1: AABB, arg2: (param0: ItemEntity) => boolean)
    // private adjustedStackCount: number;
    // private box: AABB;
    readonly mergeEntities: ItemEntity[];
    // private predicate: (param0: ItemEntity) => boolean;
    // private searchingEntity: ItemEntity;
    // private stack: ItemStack;
    accept(arg0: ItemEntity): AbortableIterationConsumer$Continuation;
    getMergeEntities(): ItemEntity[];
}