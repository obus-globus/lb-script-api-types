import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StructurePiece$BlockSelector } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece$BlockSelector.d.ts'
export class JungleTemplePiece$MossStoneSelector extends StructurePiece$BlockSelector {
    private constructor()
    next(random: RandomSource, worldX: number, worldY: number, worldZ: number, isEdge: boolean): void;
}