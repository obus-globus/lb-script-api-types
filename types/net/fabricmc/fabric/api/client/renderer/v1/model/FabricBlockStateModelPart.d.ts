import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export interface FabricBlockStateModelPart extends Object{
    emitQuads(arg0: QuadEmitter, arg1: (param0: Direction) => kotlin.Boolean): void;
}