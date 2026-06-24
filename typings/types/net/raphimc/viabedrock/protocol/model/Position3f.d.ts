import type { BlockFace } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockFace.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Position3f extends Record {
    static ZERO: Position3f;
    constructor(x: number, y: number, z: number)
    // private x: number;
    // private y: number;
    // private z: number;
    add(arg0: number, arg1: number, arg2: number): Position3f;
    add(arg0: Position3f): Position3f;
    distanceTo(arg0: Position3f): number;
    equals(arg0: Object | null): boolean;
    getRelative(arg0: BlockFace): Position3f;
    hashCode(): number;
    subtract(arg0: number, arg1: number, arg2: number): Position3f;
    subtract(arg0: Position3f): Position3f;
    toString(): string;
    x(): number;
    y(): number;
    z(): number;
}