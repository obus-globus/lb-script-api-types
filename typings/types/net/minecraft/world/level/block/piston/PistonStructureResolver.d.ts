import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class PistonStructureResolver extends Object {
    static MAX_PUSH_DEPTH: number;
    constructor(level: Level, pistonPos: BlockPos, direction: Direction, extending: boolean)
    // private extending: boolean;
    // private level: Level;
    // private pistonDirection: Direction;
    // private pistonPos: BlockPos;
    readonly pushDirection: Direction;
    // private startPos: BlockPos;
    readonly toDestroy: BlockPos[];
    readonly toPush: BlockPos[];
    // private addBlockLine(start: BlockPos, direction: Direction): boolean;
    // private addBranchingBlocks(fromPos: BlockPos): boolean;
    getPushDirection(): Direction;
    getToDestroy(): BlockPos[];
    getToPush(): BlockPos[];
    // private reorderListAtCollision(blocksAdded: number, collisionPos: number): void;
    resolve(): boolean;
}