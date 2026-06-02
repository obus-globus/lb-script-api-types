import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
import type { BlockStateModelPart } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
export class AbstractBlockRenderContext$BlockEmitter extends MutableQuadViewImpl {
    constructor(null_: AbstractBlockRenderContext$BlockEmitter)
    emitDirectly(): void;
    emitPart(arg0: BlockStateModelPart, arg1: (param0: Direction) => kotlin.Boolean, arg2: (param0: MutableQuadViewImpl) => void): void;
}