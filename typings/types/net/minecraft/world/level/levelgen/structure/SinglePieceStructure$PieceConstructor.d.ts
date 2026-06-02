import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { WorldgenRandom } from '../../../../../../net/minecraft/world/level/levelgen/WorldgenRandom.d.ts'
import type { StructurePiece } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
export interface SinglePieceStructure$PieceConstructor extends Object{
    construct(random: WorldgenRandom, x: number, z: number): StructurePiece;
}