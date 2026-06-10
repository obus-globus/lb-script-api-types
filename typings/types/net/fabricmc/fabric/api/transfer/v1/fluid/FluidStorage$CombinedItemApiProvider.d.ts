import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ContainerItemContext } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/context/ContainerItemContext.d.ts'
import type { FluidVariant } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { StorageView } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
export interface FluidStorage$CombinedItemApiProvider extends Object{
    find(arg0: ContainerItemContext): StorageView<FluidVariant>[];
}