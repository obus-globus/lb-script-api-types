import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LightPipeline } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightPipeline.d.ts'
import type { LightDataAccess } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/LightDataAccess.d.ts'
import type { QuadLightData } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/QuadLightData.d.ts'
import type { AoFaceData } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/smooth/AoFaceData.d.ts'
import type { AoNeighborInfo } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/smooth/AoNeighborInfo.d.ts'
import type { ModelQuadView } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vector3f } from '../../../../../../../../org/joml/Vector3f.d.ts'
export class SmoothLightPipeline extends Object implements LightPipeline {
    constructor(arg0: LightDataAccess)
    // private cachedFaceData: AoFaceData[];
    // private cachedPos: number;
    // private lightCache: LightDataAccess;
    // private tmpFace: AoFaceData;
    // private vertexNormal: Vector3f;
    // private weights: number[];
    // private applyAlignedFullFace(arg0: AoNeighborInfo, arg1: BlockPos, arg2: Direction, arg3: QuadLightData, arg4: boolean): void;
    // private applyAlignedPartialFace(arg0: AoNeighborInfo, arg1: ModelQuadView, arg2: BlockPos, arg3: Direction, arg4: QuadLightData, arg5: boolean): void;
    // private applyAlignedPartialFaceVertex(arg0: BlockPos, arg1: Direction, arg2: number[], arg3: number, arg4: QuadLightData, arg5: boolean, arg6: boolean): void;
    // private applyAmbientLighting(arg0: number[], arg1: Direction, arg2: boolean): void;
    // private applyInsetPartialFaceVertex(arg0: BlockPos, arg1: Direction, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: QuadLightData, arg7: boolean): void;
    // private applyIrregularFace(arg0: BlockPos, arg1: ModelQuadView, arg2: QuadLightData, arg3: boolean): void;
    // private applyNonParallelFace(arg0: AoNeighborInfo, arg1: ModelQuadView, arg2: BlockPos, arg3: Direction, arg4: QuadLightData, arg5: boolean): void;
    // private applyParallelFace(arg0: AoNeighborInfo, arg1: ModelQuadView, arg2: BlockPos, arg3: Direction, arg4: QuadLightData, arg5: boolean): void;
    calculate(arg0: ModelQuadView, arg1: BlockPos, arg2: QuadLightData, arg3: Direction, arg4: Direction, arg5: boolean, arg6: boolean): void;
    // private gatherInsetFace(arg0: ModelQuadView, arg1: BlockPos, arg2: number, arg3: Direction, arg4: boolean): AoFaceData;
    // private getAmbientBrightness(arg0: Direction, arg1: boolean): number;
    // private getCachedFaceData(arg0: BlockPos, arg1: Direction, arg2: boolean, arg3: boolean): AoFaceData;
    // private updateCachedData(arg0: number): void;
}