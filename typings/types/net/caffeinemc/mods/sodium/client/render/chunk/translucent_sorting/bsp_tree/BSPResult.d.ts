import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { BSPNode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPNode.d.ts'
import type { GeometryPlanes } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/GeometryPlanes.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
export class BSPResult extends GeometryPlanes {
    static fromQuadLists(paramarg0: SectionPos, paramarg1: (Object | null)[]): GeometryPlanes;
    constructor()
    readonly rootNode: BSPNode;
    readonly updatedQuadsList: (Object | null)[];
    getRootNode(): BSPNode;
    getUpdatedQuadsList(): (Object | null)[];
    setRootNode(arg0: BSPNode): void;
    setUpdatedQuadIndexes(arg0: (Object | null)[]): void;
}