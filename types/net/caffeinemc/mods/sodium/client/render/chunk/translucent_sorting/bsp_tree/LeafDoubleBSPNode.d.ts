import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { QuadSplittingMode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/QuadSplittingMode.d.ts'
import type { BSPNode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPNode.d.ts'
import type { BSPResult } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPResult.d.ts'
import type { BSPSortState } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPSortState.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class LeafDoubleBSPNode extends BSPNode {
    static buildBSP(paramarg0: (Object | null)[], paramarg1: SectionPos, paramarg2: BSPNode, paramarg3: boolean, paramarg4: boolean, paramarg5: QuadSplittingMode): BSPResult;
    constructor(arg0: number, arg1: number)
    // private quadA: number;
    // private quadB: number;
    collectSortedQuads(arg0: BSPSortState, arg1: Vector3fc): void;
}