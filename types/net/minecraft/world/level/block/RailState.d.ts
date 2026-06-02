import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BaseRailBlock } from '../../../../../net/minecraft/world/level/block/BaseRailBlock.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { RailShape } from '../../../../../net/minecraft/world/level/block/state/properties/RailShape.d.ts'
export class RailState extends Object {
    constructor(level: Level, pos: BlockPos, state: BlockState)
    // private block: BaseRailBlock;
    readonly connections: BlockPos[];
    // private isStraight: boolean;
    // private level: Level;
    // private pos: BlockPos;
    readonly state: BlockState;
    // private canConnectTo(rail: RailState): boolean;
    // private connectTo(rail: RailState): void;
    // private connectsTo(rail: RailState): boolean;
    countPotentialConnections(): number;
    getConnections(): BlockPos[];
    // private getRail(pos: BlockPos): RailState;
    getState(): BlockState;
    // private hasConnection(railPos: BlockPos): boolean;
    // private hasNeighborRail(railPos: BlockPos): boolean;
    // private hasRail(pos: BlockPos): boolean;
    place(hasSignal: boolean, first: boolean, defaultShape: RailShape): RailState;
    // private removeSoftConnections(): void;
    // private updateConnections(direction: RailShape): void;
}