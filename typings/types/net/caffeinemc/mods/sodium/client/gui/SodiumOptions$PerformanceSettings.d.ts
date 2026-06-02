import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeferMode } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/DeferMode.d.ts'
import type { QuadSplittingMode } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/QuadSplittingMode.d.ts'
export class SodiumOptions$PerformanceSettings extends Object {
    constructor()
    animateOnlyVisibleTextures: boolean;
    chunkBuildDeferMode: DeferMode;
    chunkBuilderThreads: number;
    quadSplittingMode: QuadSplittingMode;
    useBlockFaceCulling: boolean;
    useEntityCulling: boolean;
    useFogOcclusion: boolean;
    useNoErrorGLContext: boolean;
}