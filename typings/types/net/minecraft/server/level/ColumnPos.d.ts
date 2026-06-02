import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class ColumnPos extends Record {
    static asLong(paramx: number, paramz: number): number;
    static getX(parampos: number): number;
    static getZ(parampos: number): number;
    // private x: number;
    // private z: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toChunkPos(): ChunkPos;
    toLong(): number;
    toString(): string;
    x(): number;
    z(): number;
}