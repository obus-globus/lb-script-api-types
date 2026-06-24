import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HitboxRenderState extends Record {
    constructor(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, red: number, green: number, blue: number)
    constructor(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, offsetX: number, offsetY: number, offsetZ: number, red: number, green: number, blue: number)
    // private blue: number;
    // private green: number;
    // private offsetX: number;
    // private offsetY: number;
    // private offsetZ: number;
    // private red: number;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    // private z0: number;
    // private z1: number;
    blue(): number;
    equals(o: Object | null): boolean;
    green(): number;
    hashCode(): number;
    offsetX(): number;
    offsetY(): number;
    offsetZ(): number;
    red(): number;
    toString(): string;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
    z0(): number;
    z1(): number;
}