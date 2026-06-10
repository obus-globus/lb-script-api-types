import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class BoxVertexIteratorKt extends Object {
    static forEachFaceVertex(aABB: AABB, fn: (param0: Object, param1: Object, param2: Object, param3: Object) => void): void;
    static forEachOutlineVertex(aABB: AABB, fn: (param0: Object, param1: Object, param2: Object, param3: Object) => void): void;
}