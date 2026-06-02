import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { SideChainPartBlock$Neighbor } from '../../../../../net/minecraft/world/level/block/SideChainPartBlock$Neighbor.d.ts'
import type { SideChainPartBlock$Neighbors } from '../../../../../net/minecraft/world/level/block/SideChainPartBlock$Neighbors.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { SideChainPart } from '../../../../../net/minecraft/world/level/block/state/properties/SideChainPart.d.ts'
export interface SideChainPartBlock extends Object{
    // private addBlocksConnectingTowards(getNeighbor: (param0: SideChainPartBlock$Neighbor) => unknown, endPart: SideChainPart, accumulator: (param0: BlockPos) => void): void;
    // private canConnect(newBlocksToConnectTo: number, currentChainLength: number): boolean;
    getAllBlocksConnectedTo(level: LevelAccessor, pos: BlockPos): BlockPos[];
    getFacing(state: BlockState): Direction;
    getMaxChainLength(): number;
    // private getNeighbors(level: LevelAccessor, center: BlockPos, facing: Direction): SideChainPartBlock$Neighbors;
    getSideChainPart(state: BlockState): SideChainPart;
    // private isBeingUpdatedByNeighbor(state: BlockState, oldState: BlockState): boolean;
    isConnectable(state: BlockState): boolean;
    // private setPart(level: LevelAccessor, pos: BlockPos, newPart: SideChainPart): void;
    setSideChainPart(state: BlockState, newPart: SideChainPart): BlockState;
    updateNeighborsAfterPoweringDown(level: LevelAccessor, pos: BlockPos, state: BlockState): void;
    updateSelfAndNeighborsOnPoweringUp(level: LevelAccessor, pos: BlockPos, state: BlockState, oldState: BlockState): void;
}