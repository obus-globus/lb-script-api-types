import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockApiLookup } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/block/BlockApiLookup.d.ts'
import type { ItemApiLookup } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/item/ItemApiLookup.d.ts'
import type { ContainerItemContext } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/context/ContainerItemContext.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
export class ItemStorage extends Object {
    static ITEM: ItemApiLookup<Object, ContainerItemContext>;
    static SIDED: BlockApiLookup<Object, Direction>;
    private constructor()
}