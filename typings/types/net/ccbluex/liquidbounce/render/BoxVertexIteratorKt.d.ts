import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class BoxVertexIteratorKt extends Object {
    static forEachFaceVertex(aABB: AABB, fn: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null) => void): void;
    static forEachOutlineVertex(aABB: AABB, fn: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null) => void): void;
}