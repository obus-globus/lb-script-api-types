import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SideChainPartBlock$Neighbor } from '../../../../../net/minecraft/world/level/block/SideChainPartBlock$Neighbor.d.ts'
import type { SideChainPart } from '../../../../../net/minecraft/world/level/block/state/properties/SideChainPart.d.ts'
export class SideChainPartBlock$EmptyNeighbor extends Record implements SideChainPartBlock$Neighbor {
    constructor(pos: BlockPos)
    // private pos: BlockPos;
    connectToTheLeft(): void;
    connectToTheRight(): void;
    connectsTowards(endPart: SideChainPart): boolean;
    disconnectFromLeft(): void;
    disconnectFromRight(): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isConnectable(): boolean;
    isUnconnectableOrChainEnd(): boolean;
    pos(): BlockPos;
    toString(): string;
}