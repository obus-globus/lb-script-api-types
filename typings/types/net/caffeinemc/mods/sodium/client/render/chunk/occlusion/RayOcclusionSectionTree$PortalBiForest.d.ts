import type { RayOcclusionSectionTree$FlatTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/RayOcclusionSectionTree$FlatTree.d.ts'
import type { BaseBiForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/BaseBiForest.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export class RayOcclusionSectionTree$PortalBiForest extends BaseBiForest<RayOcclusionSectionTree$FlatTree> {
    static checkApplicable(paramarg0: number, paramarg1: Level): boolean;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    makeTree(arg0: number, arg1: number, arg2: number): RayOcclusionSectionTree$FlatTree;
}