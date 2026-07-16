import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { QuadSplittingMode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/QuadSplittingMode.d.ts'
import type { BSPNode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPNode.d.ts'
import type { BSPResult } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPResult.d.ts'
import type { InnerPartitionBSPNode$NodeReuseData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/InnerPartitionBSPNode$NodeReuseData.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export abstract class InnerPartitionBSPNode extends BSPNode {
    static buildBSP(paramarg0: TQuad[], paramarg1: SectionPos, paramarg2: BSPNode, paramarg3: boolean, paramarg4: boolean, paramarg5: QuadSplittingMode): BSPResult;
    static validateQuadCount(paramarg0: number): void;
    constructor(arg0: InnerPartitionBSPNode$NodeReuseData, arg1: number)
    constructor(arg0: InnerPartitionBSPNode$NodeReuseData, arg1: Vector3fc)
    // private axis: number;
    // private fixedIndexOffset: number;
    // private indexMap: number[];
    // private planeNormal: Vector3fc;
    // private reuseData: InnerPartitionBSPNode$NodeReuseData;
    addPartitionPlanes(arg0: (Object | null)[]): void;
}