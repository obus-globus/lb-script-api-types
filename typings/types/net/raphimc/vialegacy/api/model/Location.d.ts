import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Location extends Object {
    constructor(arg0: BlockPosition)
    constructor(arg0: number, arg1: number, arg2: number)
    readonly x: number;
    readonly y: number;
    readonly z: number;
    distanceTo(arg0: Location): number;
    equals(arg0: Object | null): boolean;
    getX(): number;
    getY(): number;
    getZ(): number;
    hashCode(): number;
    setX(arg0: number): void;
    setY(arg0: number): void;
    setZ(arg0: number): void;
    toString(): string;
}