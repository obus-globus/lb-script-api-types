import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { QuadEmitter } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { FabricBlockStateModelPart } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/model/FabricBlockStateModelPart.d.ts'
import type { BlockStateModelPartMixin } from '../../../../../../net/fabricmc/fabric/mixin/client/renderer/block/model/BlockStateModelPartMixin.d.ts'
import type { IrisModelPart } from '../../../../../../net/irisshaders/iris/compat/general/IrisModelPart.d.ts'
import type { MixinBlockModelPart } from '../../../../../../net/irisshaders/iris/mixin/MixinBlockModelPart.d.ts'
import type { MixinBlockState } from '../../../../../../net/irisshaders/iris/mixin/MixinBlockState.d.ts'
import type { BakedQuad } from '../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Material$Baked } from '../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockStateModelPart extends Object, FabricBlockStateModelPart, BlockStateModelPartMixin, IrisModelPart, MixinBlockModelPart, MixinBlockState {
    emitQuads(arg0: QuadEmitter, arg1: (param0: Direction) => boolean): void;
    getBlockAppearance(): BlockState;
    getQuads(direction: Direction): BakedQuad[];
    materialFlags(): number;
    particleMaterial(): Material$Baked;
    useAmbientOcclusion(): boolean;
}