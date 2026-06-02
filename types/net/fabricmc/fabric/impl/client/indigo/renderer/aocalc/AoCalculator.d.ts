import type { QuadInstance } from '../../../../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AoFaceData } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/aocalc/AoFaceData.d.ts'
import type { QuadViewImpl } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/mesh/QuadViewImpl.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockModelLighter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockModelLighter.d.ts'
import type { BlockModelLighter$Cache } from '../../../../../../../../net/minecraft/client/renderer/block/BlockModelLighter$Cache.d.ts'
import type { BakedQuad$MaterialInfo } from '../../../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad$MaterialInfo.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vector3f } from '../../../../../../../../org/joml/Vector3f.d.ts'
export class AoCalculator extends Object {
    constructor(arg0: BlockModelLighter$Cache)
    ao: number[];
    // private completionFlags: number;
    // private faceData: AoFaceData[];
    // private level: BlockAndTintGetter;
    light: number[];
    // private lightCache: BlockModelLighter$Cache;
    // private lightPos: BlockPos$MutableBlockPos;
    // private pos: BlockPos;
    // private searchPos: BlockPos$MutableBlockPos;
    // private state: BlockState;
    // private tmpFace: AoFaceData;
    // private vanillaCalc: BlockModelLighter;
    // private vanillaMaterialInfo: BakedQuad$MaterialInfo;
    // private vanillaPos0: Vector3f;
    // private vanillaPos1: Vector3f;
    // private vanillaPos2: Vector3f;
    // private vanillaPos3: Vector3f;
    // private vanillaQuadInstance: QuadInstance;
    // private vertexNormal: Vector3f;
    // private w: number[];
    // private blendedFullFace(arg0: QuadViewImpl, arg1: Direction, arg2: boolean): void;
    // private blendedInsetFace(arg0: QuadViewImpl, arg1: number, arg2: Direction, arg3: boolean): AoFaceData;
    // private blendedPartialFace(arg0: QuadViewImpl, arg1: Direction, arg2: boolean): void;
    // private calcEnhanced(arg0: QuadViewImpl): void;
    // private calcFastVanilla(arg0: QuadViewImpl): void;
    // private calcVanilla(arg0: QuadViewImpl): void;
    // private calcVanilla(arg0: QuadViewImpl, arg1: number[], arg2: number[]): void;
    clear(): void;
    compute(arg0: QuadViewImpl, arg1: boolean): void;
    // private computeFace(arg0: AoFaceData, arg1: Direction, arg2: boolean, arg3: boolean): void;
    // private computeFace(arg0: Direction, arg1: boolean, arg2: boolean): AoFaceData;
    // private fullFace(arg0: QuadViewImpl, arg1: Direction, arg2: AoFaceData): void;
    // private gatherInsetFace(arg0: QuadViewImpl, arg1: number, arg2: Direction, arg3: boolean): AoFaceData;
    // private irregularFace(arg0: QuadViewImpl, arg1: boolean): void;
    // private partialFace(arg0: QuadViewImpl, arg1: Direction, arg2: AoFaceData): void;
    prepare(arg0: BlockAndTintGetter, arg1: BlockState, arg2: BlockPos): void;
    // private vanillaFullFace(arg0: QuadViewImpl, arg1: Direction, arg2: boolean, arg3: boolean): void;
    // private vanillaPartialFace(arg0: QuadViewImpl, arg1: Direction, arg2: boolean, arg3: boolean): void;
}