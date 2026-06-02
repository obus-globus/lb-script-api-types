import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PalettedContainerRO } from '../../../../../net/minecraft/world/level/chunk/PalettedContainerRO.d.ts'
import type { PalettedContainerRO$PackedData } from '../../../../../net/minecraft/world/level/chunk/PalettedContainerRO$PackedData.d.ts'
import type { Strategy } from '../../../../../net/minecraft/world/level/chunk/Strategy.d.ts'
export interface PalettedContainerRO$Unpacker<T extends Object | number | string | boolean, C extends PalettedContainerRO<T>> extends Object{
    read(strategy: Strategy<T>, discData: PalettedContainerRO$PackedData<T>): DataResult<C>;
}