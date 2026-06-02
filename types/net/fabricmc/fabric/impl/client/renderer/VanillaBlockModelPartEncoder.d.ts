import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { QuadEmitter } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { BlockStateModelPart } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
export class VanillaBlockModelPartEncoder extends Object {
    static emitQuads(paramarg0: BlockStateModelPart, paramarg1: QuadEmitter, paramarg2: (param0: Direction) => kotlin.Boolean): void;
    constructor()
}