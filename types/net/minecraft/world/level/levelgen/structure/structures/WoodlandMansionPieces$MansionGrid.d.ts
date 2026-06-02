import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WoodlandMansionPieces$SimpleGrid } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/WoodlandMansionPieces$SimpleGrid.d.ts'
export class WoodlandMansionPieces$MansionGrid extends Object {
    static isHouse(paramgrid: WoodlandMansionPieces$SimpleGrid, paramx: number, paramy: number): boolean;
    constructor(random: RandomSource)
    // private baseGrid: WoodlandMansionPieces$SimpleGrid;
    // private entranceX: number;
    // private entranceY: number;
    // private floorRooms: WoodlandMansionPieces$SimpleGrid[];
    // private random: RandomSource;
    // private thirdFloorGrid: WoodlandMansionPieces$SimpleGrid;
    // private cleanEdges(grid: WoodlandMansionPieces$SimpleGrid): boolean;
    get1x2RoomDirection(grid: WoodlandMansionPieces$SimpleGrid, x: number, y: number, floorNum: number, roomId: number): Direction;
    // private identifyRooms(fromGrid: WoodlandMansionPieces$SimpleGrid, roomGrid: WoodlandMansionPieces$SimpleGrid): void;
    isRoomId(grid: WoodlandMansionPieces$SimpleGrid, x: number, y: number, floor: number, roomId: number): boolean;
    // private recursiveCorridor(grid: WoodlandMansionPieces$SimpleGrid, x: number, y: number, heading: Direction, depth: number): void;
    // private setupThirdFloor(): void;
}