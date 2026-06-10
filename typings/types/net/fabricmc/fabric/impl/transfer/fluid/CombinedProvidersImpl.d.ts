import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ContainerItemContext } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/context/ContainerItemContext.d.ts'
import type { FluidStorage$CombinedItemApiProvider } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidStorage$CombinedItemApiProvider.d.ts'
import type { FluidVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { StorageView } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
export class CombinedProvidersImpl extends Object {
    static createEvent(paramarg0: boolean): Event<(param0: ContainerItemContext) => StorageView<FluidVariant>[]>;
    static getOrCreateItemEvent(paramarg0: Item): Event<(param0: ContainerItemContext) => StorageView<FluidVariant>[]>;
    constructor()
}