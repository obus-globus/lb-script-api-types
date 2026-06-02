import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { OceanMonumentPieces$MonumentRoomFitter } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/OceanMonumentPieces$MonumentRoomFitter.d.ts'
import type { OceanMonumentPieces$OceanMonumentPiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/OceanMonumentPieces$OceanMonumentPiece.d.ts'
import type { OceanMonumentPieces$RoomDefinition } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/OceanMonumentPieces$RoomDefinition.d.ts'
export class OceanMonumentPieces$FitSimpleTopRoom extends Object implements OceanMonumentPieces$MonumentRoomFitter {
    private constructor()
    create(orientation: Direction, definition: OceanMonumentPieces$RoomDefinition, random: RandomSource): OceanMonumentPieces$OceanMonumentPiece;
    fits(definition: OceanMonumentPieces$RoomDefinition): boolean;
}