import type { Viewport } from '../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { ViewportProvider } from '../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/ViewportProvider.d.ts'
import type { Frustum } from '../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/frustum/Frustum.d.ts'
import type { BoxCuller } from '../../../../../../net/irisshaders/iris/shadows/frustum/BoxCuller.d.ts'
import type { BaseClippingPlanes } from '../../../../../../net/irisshaders/iris/shadows/frustum/advanced/BaseClippingPlanes.d.ts'
import type { Frustum as Frustum_2 } from '../../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3d } from '../../../../../../org/joml/Vector3d.d.ts'
import type { Vector3f } from '../../../../../../org/joml/Vector3f.d.ts'
import type { Vector4f } from '../../../../../../org/joml/Vector4f.d.ts'
export class AdvancedShadowCullingFrustum extends Frustum_2 implements ViewportProvider, Frustum {
    static CHUNK_SECTION_MARGIN: number;
    static CHUNK_SECTION_RADIUS: number;
    static OFFSET_STEP: number;
    static SECTION_HALF_SIZE: number;
    constructor(arg0: Matrix4fc, arg1: Matrix4fc, arg2: Vector3f, arg3: BoxCuller)
    // private boxCuller: BoxCuller;
    // private planeCount: number;
    // private planes: number[][];
    // private position: Vector3d;
    // private shadowLightVectorFromOrigin: Vector3f;
    x: number;
    y: number;
    z: number;
    // private addBackPlanes(arg0: BaseClippingPlanes): boolean[];
    // private addEdgePlane(arg0: Vector4f, arg1: Vector4f): void;
    // private addEdgePlanes(arg0: BaseClippingPlanes, arg1: boolean[]): void;
    // private addPlane(arg0: number[]): void;
    canDetermineInvisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    checkCornerVisibility(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    checkCornerVisibilityBool(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    // private cross(arg0: Vector3f, arg1: Vector3f): Vector3f;
    // private extend(arg0: Vector3f, arg1: number): Vector4f;
    fastAabbTest(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    intersectAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    isVisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    isVisible(arg0: AABB): boolean;
    // private lengthSquared(arg0: Vector3f): number;
    prepare(arg0: number, arg1: number, arg2: number): void;
    sodium$createViewport(): Viewport;
    testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    testSection(arg0: number, arg1: number, arg2: number): boolean;
    testSectionExpanded(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    // private truncate(arg0: Vector4f): Vector3f;
}