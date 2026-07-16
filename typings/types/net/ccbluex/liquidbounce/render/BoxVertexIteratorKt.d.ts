import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class BoxVertexIteratorKt extends Object {
    static forEachFaceVertex(self: AABB, fn: (param0: number, param1: number, param2: number, param3: number) => void): void;
    static forEachOutlineVertex(self: AABB, fn: (param0: number, param1: number, param2: number, param3: number) => void): void;
}