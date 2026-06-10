import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ItemApiLookup$ItemApiProvider } from '../../../../../../net/fabricmc/fabric/api/lookup/v1/item/ItemApiLookup$ItemApiProvider.d.ts'
import type { ContainerItemContext } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/context/ContainerItemContext.d.ts'
import type { FluidStorage$CombinedItemApiProvider } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidStorage$CombinedItemApiProvider.d.ts'
import type { FluidVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { StorageView } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CombinedProvidersImpl$Provider extends Object implements ItemApiLookup$ItemApiProvider<StorageView<FluidVariant>[], ContainerItemContext> {
    private constructor()
    // private event: Event<(param0: ContainerItemContext) => StorageView<FluidVariant>[]>;
    find(arg0: ItemStack, arg1: ContainerItemContext): StorageView<FluidVariant>[];
}