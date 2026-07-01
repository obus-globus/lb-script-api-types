import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
export interface VertexList extends Object{
    readonly size: number;
    vec(index: number, dest: Vector3f): Vector3f;
    x(index: number): number;
    y(index: number): number;
    z(index: number): number;
}