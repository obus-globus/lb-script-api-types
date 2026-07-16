import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LightMode } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightMode.d.ts'
import type { LightPipeline } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightPipeline.d.ts'
import type { LightDataAccess } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/LightDataAccess.d.ts'
import type { FlatFluidLightPipeline } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/light/flat/FlatFluidLightPipeline.d.ts'
export class LightPipelineProvider extends Object {
    constructor(arg0: LightDataAccess)
    readonly flatFluidLighter: FlatFluidLightPipeline;
    // private lighters: Map<LightMode, LightPipeline>;
    getFlatFluidLighter(): FlatFluidLightPipeline;
    getLighter(arg0: LightMode): LightPipeline;
}