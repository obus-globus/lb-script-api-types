import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { SideChainPartBlock } from '../../../../../net/minecraft/world/level/block/SideChainPartBlock.d.ts'
import type { SideChainPartBlock$Neighbor } from '../../../../../net/minecraft/world/level/block/SideChainPartBlock$Neighbor.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class SideChainPartBlock$Neighbors extends Record {
    constructor(block: SideChainPartBlock, level: LevelAccessor, facing: Direction, center: BlockPos, cache: JavaMap<BlockPos, SideChainPartBlock$Neighbor>)
    // private block: SideChainPartBlock;
    // private cache: JavaMap<BlockPos, SideChainPartBlock$Neighbor>;
    // private center: BlockPos;
    // private facing: Direction;
    // private level: LevelAccessor;
    block(): SideChainPartBlock;
    cache(): JavaMap<BlockPos, SideChainPartBlock$Neighbor>;
    center(): BlockPos;
    // private createNewNeighbor(pos: BlockPos): SideChainPartBlock$Neighbor;
    equals(o: Object | null): boolean;
    facing(): Direction;
    // private getOrCreateNeighbor(dir: Direction, steps: number): SideChainPartBlock$Neighbor;
    hashCode(): number;
    // private isConnectableToThisBlock(neighbor: BlockState): boolean;
    left(): SideChainPartBlock$Neighbor;
    left(steps: number): SideChainPartBlock$Neighbor;
    level(): LevelAccessor;
    right(): SideChainPartBlock$Neighbor;
    right(steps: number): SideChainPartBlock$Neighbor;
    toString(): string;
}