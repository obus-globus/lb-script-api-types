import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export interface BlockApiLookup$BlockEntityApiProvider<A extends unknown, C extends unknown> extends Object{
    find(arg0: BlockEntity, arg1: C): A;
}