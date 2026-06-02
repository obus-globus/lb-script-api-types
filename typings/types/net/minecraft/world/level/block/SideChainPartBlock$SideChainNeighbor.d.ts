import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { SideChainPartBlock } from '../../../../../net/minecraft/world/level/block/SideChainPartBlock.d.ts'
import type { SideChainPartBlock$Neighbor } from '../../../../../net/minecraft/world/level/block/SideChainPartBlock$Neighbor.d.ts'
import type { SideChainPart } from '../../../../../net/minecraft/world/level/block/state/properties/SideChainPart.d.ts'
export class SideChainPartBlock$SideChainNeighbor extends Record implements SideChainPartBlock$Neighbor {
    constructor(level: LevelAccessor, block: SideChainPartBlock, pos: BlockPos, part: SideChainPart)
    // private block: SideChainPartBlock;
    // private level: LevelAccessor;
    // private part: SideChainPart;
    // private pos: BlockPos;
    block(): SideChainPartBlock;
    connectToTheLeft(): void;
    connectToTheLeft(): void;
    connectToTheRight(): void;
    connectToTheRight(): void;
    connectsTowards(endPart: SideChainPart): boolean;
    disconnectFromLeft(): void;
    disconnectFromLeft(): void;
    disconnectFromRight(): void;
    disconnectFromRight(): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isConnectable(): boolean;
    isUnconnectableOrChainEnd(): boolean;
    level(): LevelAccessor;
    part(): SideChainPart;
    pos(): BlockPos;
    toString(): string;
}