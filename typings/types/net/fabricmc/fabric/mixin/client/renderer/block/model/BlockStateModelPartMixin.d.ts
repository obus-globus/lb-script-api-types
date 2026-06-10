import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { FabricBlockStateModelPart } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/model/FabricBlockStateModelPart.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export interface BlockStateModelPartMixin extends Object, FabricBlockStateModelPart {
    emitQuads(arg0: QuadEmitter, arg1: (param0: Direction) => boolean): void;
}