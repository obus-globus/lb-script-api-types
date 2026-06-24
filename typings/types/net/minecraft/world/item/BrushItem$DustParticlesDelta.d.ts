import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BrushItem$DustParticlesDelta extends Record {
    static fromDirection(paramviewVector: Vec3, paramhitDirection: Direction): BrushItem$DustParticlesDelta;
    private constructor(xd: number, yd: number, zd: number)
    // private xd: number;
    // private yd: number;
    // private zd: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    xd(): number;
    yd(): number;
    zd(): number;
}