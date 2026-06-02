import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { WoodlandMansionPieces$FloorRoomCollection } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/WoodlandMansionPieces$FloorRoomCollection.d.ts'
import type { WoodlandMansionPieces$MansionGrid } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/WoodlandMansionPieces$MansionGrid.d.ts'
import type { WoodlandMansionPieces$PlacementData } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/WoodlandMansionPieces$PlacementData.d.ts'
import type { WoodlandMansionPieces$SimpleGrid } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/WoodlandMansionPieces$SimpleGrid.d.ts'
import type { WoodlandMansionPieces$WoodlandMansionPiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/WoodlandMansionPieces$WoodlandMansionPiece.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class WoodlandMansionPieces$MansionPiecePlacer extends Object {
    constructor(structureTemplateManager: StructureTemplateManager, random: RandomSource)
    // private random: RandomSource;
    // private startX: number;
    // private startY: number;
    // private structureTemplateManager: StructureTemplateManager;
    // private addRoom1x1(pieces: WoodlandMansionPieces$WoodlandMansionPiece[], roomPos: BlockPos, rotation: Rotation, doorDir: Direction, rooms: WoodlandMansionPieces$FloorRoomCollection): void;
    // private addRoom1x2(pieces: WoodlandMansionPieces$WoodlandMansionPiece[], roomPos: BlockPos, rotation: Rotation, roomDir: Direction, doorDir: Direction, rooms: WoodlandMansionPieces$FloorRoomCollection, isStairsRoom: boolean): void;
    // private addRoom2x2(pieces: WoodlandMansionPieces$WoodlandMansionPiece[], roomPos: BlockPos, rotation: Rotation, roomDir: Direction, doorDir: Direction, rooms: WoodlandMansionPieces$FloorRoomCollection): void;
    // private addRoom2x2Secret(pieces: WoodlandMansionPieces$WoodlandMansionPiece[], roomPos: BlockPos, rotation: Rotation, rooms: WoodlandMansionPieces$FloorRoomCollection): void;
    createMansion(origin: BlockPos, rotation: Rotation, pieces: WoodlandMansionPieces$WoodlandMansionPiece[], mansion: WoodlandMansionPieces$MansionGrid): void;
    // private createRoof(pieces: WoodlandMansionPieces$WoodlandMansionPiece[], roofOrigin: BlockPos, rotation: Rotation, grid: WoodlandMansionPieces$SimpleGrid, aboveGrid: WoodlandMansionPieces$SimpleGrid): void;
    // private entrance(pieces: WoodlandMansionPieces$WoodlandMansionPiece[], data: WoodlandMansionPieces$PlacementData): void;
    // private traverseInnerTurn(pieces: WoodlandMansionPieces$WoodlandMansionPiece[], data: WoodlandMansionPieces$PlacementData): void;
    // private traverseOuterWalls(pieces: WoodlandMansionPieces$WoodlandMansionPiece[], data: WoodlandMansionPieces$PlacementData, grid: WoodlandMansionPieces$SimpleGrid, gridDirection: Direction, startX: number, startY: number, endX: number, endY: number): void;
    // private traverseTurn(pieces: WoodlandMansionPieces$WoodlandMansionPiece[], data: WoodlandMansionPieces$PlacementData): void;
    // private traverseWallPiece(pieces: WoodlandMansionPieces$WoodlandMansionPiece[], data: WoodlandMansionPieces$PlacementData): void;
}