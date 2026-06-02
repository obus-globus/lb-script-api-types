import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LightPipeline } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightPipeline.d.ts'
import type { LightDataAccess } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/LightDataAccess.d.ts'
import type { QuadLightData } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/QuadLightData.d.ts'
import type { ModelQuadView } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class FlatLightPipeline extends Object implements LightPipeline {
    constructor(arg0: LightDataAccess)
    // private lightCache: LightDataAccess;
    calculate(arg0: ModelQuadView, arg1: BlockPos, arg2: QuadLightData, arg3: Direction, arg4: Direction, arg5: boolean, arg6: boolean): void;
    // private getOffsetLightmap(arg0: BlockPos, arg1: Direction): number;
    getShade(arg0: BlockAndTintGetter, arg1: Direction, arg2: boolean): number;
}