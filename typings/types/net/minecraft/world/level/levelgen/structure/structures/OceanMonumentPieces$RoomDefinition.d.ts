import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
export class OceanMonumentPieces$RoomDefinition extends Object {
    constructor(roomIndex: number)
    // private claimed: boolean;
    // private connections: OceanMonumentPieces$RoomDefinition[];
    // private hasOpening: boolean[];
    // private index: number;
    // private isSource: boolean;
    // private scanIndex: number;
    countOpenings(): number;
    findSource(scanIndex: number): boolean;
    isSpecial(): boolean;
    setConnection(direction: Direction, definition: OceanMonumentPieces$RoomDefinition): void;
    updateOpenings(): void;
}