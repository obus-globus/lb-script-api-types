import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ModelPart$Vertex extends Record {
    static SCALE_FACTOR: number;
    // private u: number;
    // private v: number;
    // private x: number;
    // private y: number;
    // private z: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    remap(u: number, v: number): ModelPart$Vertex;
    toString(): string;
    u(): number;
    v(): number;
    worldX(): number;
    worldY(): number;
    worldZ(): number;
    x(): number;
    y(): number;
    z(): number;
}