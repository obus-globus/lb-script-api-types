import type { RayOcclusionSectionTree$FlatTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/RayOcclusionSectionTree$FlatTree.d.ts'
import type { BaseMultiForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/BaseMultiForest.d.ts'
export class RayOcclusionSectionTree$PortalMultiForest extends BaseMultiForest<RayOcclusionSectionTree$FlatTree> {
    static forestDimFromBuildDistance(paramarg0: number): number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    makeTree(arg0: number, arg1: number, arg2: number): RayOcclusionSectionTree$FlatTree;
    makeTrees(arg0: number): RayOcclusionSectionTree$FlatTree[];
}