import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
export class BlockConnectionsEmulation1_12_2 extends Object {
    static init(): void;
    static updateChunkConnections(paramarg0: LevelReader, paramarg1: number, paramarg2: number): void;
    static updateChunkNeighborConnections(paramarg0: LevelReader, paramarg1: number, paramarg2: number): void;
    static updateChunkNeighborConnections(paramarg0: LevelReader, paramarg1: BlockPos): void;
    constructor()
}