import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class CompactVectorArray extends Object {
    constructor(count: number)
    // private contents: number[];
    get(index: number, output: Vector3f): Vector3f;
    getX(index: number): number;
    getY(index: number): number;
    getZ(index: number): number;
    set(index: number, x: number, y: number, z: number): void;
    set(index: number, v: Vector3fc): void;
    size(): number;
}