import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StorageView } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export interface SidedStorageBlockEntity extends Object{
    getFluidStorage(arg0: Direction): StorageView<T>[];
    getItemStorage(arg0: Direction): StorageView<T>[];
}