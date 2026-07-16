import type { QuadSplittingMode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/QuadSplittingMode.d.ts'
import type { BSPNode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPNode.d.ts'
import type { BSPResult } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPResult.d.ts'
import type { BSPSortState } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPSortState.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { NativeBuffer } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class LeafMultiBSPNode extends BSPNode {
    static buildBSP(paramarg0: TQuad[], paramarg1: SectionPos, paramarg2: BSPNode, paramarg3: boolean, paramarg4: boolean, paramarg5: QuadSplittingMode): BSPResult;
    constructor(arg0: number[])
    // private quads: number[];
    collectSortedQuads(arg0: BSPSortState, arg1: Vector3fc): void;
    collectSortedQuads(arg0: NativeBuffer, arg1: Vector3fc): void;
}