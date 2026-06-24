import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
export class CardinalLighting extends Record {
    static DEFAULT: CardinalLighting;
    static NETHER: CardinalLighting;
    constructor(down: number, up: number, north: number, south: number, west: number, east: number)
    // private down: number;
    // private east: number;
    // private north: number;
    // private south: number;
    // private up: number;
    // private west: number;
    byFace(direction: Direction): number;
    down(): number;
    east(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    north(): number;
    south(): number;
    toString(): string;
    up(): number;
    west(): number;
}