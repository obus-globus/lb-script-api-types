import type { LightDataAccess } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/LightDataAccess.d.ts'
import type { QuadLightData } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/QuadLightData.d.ts'
import type { FlatLightPipeline } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/flat/FlatLightPipeline.d.ts'
import type { ModelQuadView } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class FlatFluidLightPipeline extends FlatLightPipeline {
    constructor(arg0: LightDataAccess)
    calculate(arg0: ModelQuadView, arg1: BlockPos, arg2: QuadLightData, arg3: Direction, arg4: Direction, arg5: boolean, arg6: boolean): void;
}