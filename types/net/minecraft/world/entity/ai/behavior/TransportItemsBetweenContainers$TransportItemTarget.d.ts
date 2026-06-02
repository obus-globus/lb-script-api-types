import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class TransportItemsBetweenContainers$TransportItemTarget extends Record {
    static tryCreatePossibleTarget(paramblockPos: BlockPos, paramlevel: Level): TransportItemsBetweenContainers$TransportItemTarget;
    static tryCreatePossibleTarget(paramblockEntity: BlockEntity, paramlevel: Level): TransportItemsBetweenContainers$TransportItemTarget;
    constructor(pos: BlockPos, container: ItemStack[], blockEntity: BlockEntity, state: BlockState)
    // private blockEntity: BlockEntity;
    // private container: ItemStack[];
    // private pos: BlockPos;
    // private state: BlockState;
    blockEntity(): BlockEntity;
    container(): ItemStack[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): BlockPos;
    state(): BlockState;
    toString(): string;
}