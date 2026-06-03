import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function4 } from '../../../../kotlin/jvm/functions/Function4.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class BoxVertexIteratorKt extends Object {
    static forEachFaceVertex(aABB: AABB, fn: Function4<Object, Object, Object, Object, void>): void;
    static forEachOutlineVertex(aABB: AABB, fn: Function4<Object, Object, Object, Object, void>): void;
}