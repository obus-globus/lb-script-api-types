import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3f } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { VertexList } from '../../../../../net/ccbluex/liquidbounce/render/utils/VertexList.d.ts'
import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
export class MutableVertexList extends Object implements VertexList {
    static ELEMENTS_PER_VERTEX: number;
    constructor(initialVertexCapacity: number)
    readonly size: number;
    // private values: (Object | null)[];
    add(x: number, y: number, z: number): MutableVertexList;
    add(vec: Vec3f): MutableVertexList;
    add(vec: Vec3): MutableVertexList;
    addAll<T extends unknown>(vertices: T[], vertexMapper: (param0: T) => Vec3): MutableVertexList;
    addAll(vertices: Vec3[]): MutableVertexList;
    addAllRelative<T extends unknown>(vertices: T[], origin: Vec3, vertexMapper: (param0: T) => Vec3): MutableVertexList;
    addAllRelative(vertices: Vec3[], origin: Vec3): MutableVertexList;
    addAllRelativeToCamera<T extends unknown>(vertices: T[], camera: Camera, vertexMapper: (param0: T) => Vec3): MutableVertexList;
    addAllRelativeToCamera(vertices: Vec3[], camera: Camera): MutableVertexList;
    addRelative(vec: Vec3, origin: Vec3): MutableVertexList;
    addRelativeToCamera(vec: Vec3, camera: Camera): MutableVertexList;
    vec(index: number, dest: Vector3f): Vector3f;
    x(index: number): number;
    y(index: number): number;
    z(index: number): number;
}