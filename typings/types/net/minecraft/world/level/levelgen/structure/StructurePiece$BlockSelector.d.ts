import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export abstract class StructurePiece$BlockSelector extends Object {
    constructor()
    next: BlockState;
    getNext(): BlockState;
    next(random: RandomSource, worldX: number, worldY: number, worldZ: number, isEdge: boolean): void;
}