import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
import type { PlatformModelEmitter$Bufferer } from '../../../../../../net/caffeinemc/mods/sodium/client/services/PlatformModelEmitter$Bufferer.d.ts'
import type { BlockAndTintGetter } from '../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockStateModel } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModelPart } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface PlatformModelEmitter extends Object {
    emitModel(arg0: BlockStateModel, arg1: (param0: Direction) => kotlin.Boolean, arg2: MutableQuadViewImpl, arg3: RandomSource, arg4: BlockAndTintGetter, arg5: BlockPos, arg6: BlockState, arg7: (param0: BlockStateModelPart, param1: (param0: Direction) => kotlin.Boolean, param2: (param0: MutableQuadViewImpl) => void) => void): void;
}