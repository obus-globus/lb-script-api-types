import type { Frustum } from '../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/frustum/Frustum.d.ts'
import type { BoxCuller } from '../../../../../../net/irisshaders/iris/shadows/frustum/BoxCuller.d.ts'
import type { AdvancedShadowCullingFrustum } from '../../../../../../net/irisshaders/iris/shadows/frustum/advanced/AdvancedShadowCullingFrustum.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3f } from '../../../../../../org/joml/Vector3f.d.ts'
export class SafeZoneCullingFrustum extends AdvancedShadowCullingFrustum implements Frustum {
    static CHUNK_SECTION_MARGIN: number;
    static CHUNK_SECTION_RADIUS: number;
    static OFFSET_STEP: number;
    static SECTION_HALF_SIZE: number;
    constructor(arg0: Matrix4fc, arg1: Matrix4fc, arg2: Vector3f, arg3: BoxCuller, arg4: BoxCuller)
    // private distanceCuller: BoxCuller;
    fastAabbTest(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    intersectAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    isVisible(arg0: AABB): boolean;
    prepare(arg0: number, arg1: number, arg2: number): void;
    testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
}