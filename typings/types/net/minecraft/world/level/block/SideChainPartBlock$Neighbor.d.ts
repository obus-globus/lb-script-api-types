import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SideChainPart } from '../../../../../net/minecraft/world/level/block/state/properties/SideChainPart.d.ts'
export interface SideChainPartBlock$Neighbor extends Object{
    connectToTheLeft(): void;
    connectToTheRight(): void;
    connectsTowards(endPart: SideChainPart): boolean;
    disconnectFromLeft(): void;
    disconnectFromRight(): void;
    isConnectable(): boolean;
    isUnconnectableOrChainEnd(): boolean;
    pos(): BlockPos;
}