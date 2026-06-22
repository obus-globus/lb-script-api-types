import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { ModelBaker } from '../../../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
export interface CustomUnbakedBlockStateModel extends Object, BlockStateModel$Unbaked{
    asRoot(): BlockStateModel$UnbakedRoot;
    bake(modelBakery: ModelBaker): BlockStateModel;
    codec(): MapCodec<CustomUnbakedBlockStateModel>;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
}