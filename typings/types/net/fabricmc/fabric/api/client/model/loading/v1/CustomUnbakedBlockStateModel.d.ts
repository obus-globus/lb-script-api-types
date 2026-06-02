import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
export interface CustomUnbakedBlockStateModel extends Object, BlockStateModel$Unbaked{
    asRoot(): BlockStateModel$UnbakedRoot;
    codec(): MapCodec<CustomUnbakedBlockStateModel>;
}