import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { QuadSplittingMode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/QuadSplittingMode.d.ts'
import type { BSPNode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPNode.d.ts'
import type { BSPResult } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPResult.d.ts'
import type { BSPSortState } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPSortState.d.ts'
import type { InnerPartitionBSPNode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/InnerPartitionBSPNode.d.ts'
import type { InnerPartitionBSPNode$NodeReuseData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/InnerPartitionBSPNode$NodeReuseData.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class InnerBinaryPartitionBSPNode extends InnerPartitionBSPNode {
    static buildBSP(paramarg0: (Object | null)[], paramarg1: SectionPos, paramarg2: BSPNode, paramarg3: boolean, paramarg4: boolean, paramarg5: QuadSplittingMode): BSPResult;
    static validateQuadCount(paramarg0: number): void;
    constructor(arg0: InnerPartitionBSPNode$NodeReuseData, arg1: number, arg2: number, arg3: BSPNode, arg4: BSPNode, arg5: number[])
    constructor(arg0: InnerPartitionBSPNode$NodeReuseData, arg1: number, arg2: Vector3fc, arg3: BSPNode, arg4: BSPNode, arg5: number[])
    // private inside: BSPNode;
    // private onPlaneQuads: number[];
    // private outside: BSPNode;
    // private planeDistance: number;
    addPartitionPlanes(arg0: (Object | null)[]): void;
    // private collectInside(arg0: BSPSortState, arg1: Vector3fc): void;
    // private collectOutside(arg0: BSPSortState, arg1: Vector3fc): void;
    collectSortedQuads(arg0: BSPSortState, arg1: Vector3fc): void;
}