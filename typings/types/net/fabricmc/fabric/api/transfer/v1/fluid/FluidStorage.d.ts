import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { BlockApiLookup } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/block/BlockApiLookup.d.ts'
import type { ItemApiLookup } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/item/ItemApiLookup.d.ts'
import type { ContainerItemContext } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/context/ContainerItemContext.d.ts'
import type { FluidStorage$CombinedItemApiProvider } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidStorage$CombinedItemApiProvider.d.ts'
import type { FluidVariant } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { StorageView } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
export class FluidStorage extends Object {
    static GENERAL_COMBINED_PROVIDER: Event<(param0: ContainerItemContext) => StorageView<FluidVariant>[]>;
    static ITEM: ItemApiLookup<StorageView<FluidVariant>[], ContainerItemContext>;
    static SIDED: BlockApiLookup<StorageView<FluidVariant>[], Direction>;
    static combinedItemApiProvider(paramarg0: Item): Event<(param0: ContainerItemContext) => StorageView<FluidVariant>[]>;
    private constructor()
}