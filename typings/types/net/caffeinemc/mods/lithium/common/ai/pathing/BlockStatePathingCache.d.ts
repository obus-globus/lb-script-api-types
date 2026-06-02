import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PathType } from '../../../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
export interface BlockStatePathingCache extends Object{
    lithium$getNeighborPathNodeType(): PathType;
    lithium$getPathNodeType(): PathType;
    lithium$initializePathNodeTypeCache(): void;
}