import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockBehaviour$BlockStateBase } from '../../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$BlockStateBase.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunkSection } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { PathType } from '../../../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
import type { PathfindingContext } from '../../../../../../../net/minecraft/world/level/pathfinder/PathfindingContext.d.ts'
export abstract class PathNodeCache extends Object {
    static getNeighborPathNodeType(paramarg0: BlockBehaviour$BlockStateBase): PathType;
    static getNodeTypeFromNeighbors(paramarg0: PathfindingContext, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: PathType): PathType;
    static getPathNodeType(paramarg0: BlockState): PathType;
    static isSectionSafeAsNeighbor(paramarg0: LevelChunkSection): boolean;
    constructor()
}