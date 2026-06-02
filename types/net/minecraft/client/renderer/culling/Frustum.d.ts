import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Viewport } from '../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { ViewportProvider } from '../../../../../net/caffeinemc/mods/sodium/client/render/viewport/ViewportProvider.d.ts'
import type { FrustumAccessor } from '../../../../../net/caffeinemc/mods/sodium/mixin/core/render/world/FrustumAccessor.d.ts'
import type { BoundingBox } from '../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { FrustumIntersection } from '../../../../../org/joml/FrustumIntersection.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
export class Frustum extends Object implements ViewportProvider, FrustumAccessor {
    static OFFSET_STEP: number;
    constructor(frustum: Frustum)
    constructor(modelView: Matrix4fc, projection: Matrix4f)
    readonly camX: number;
    readonly camY: number;
    readonly camZ: number;
    // private intersection: FrustumIntersection;
    // private matrix: Matrix4f;
    // private viewVector: Vector4f;
    // private calculateFrustum(modelView: Matrix4fc, projection: Matrix4f): void;
    // private cubeInFrustum(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): number;
    cubeInFrustum(bb: BoundingBox): number;
    getCamX(): number;
    getCamY(): number;
    getCamZ(): number;
    getFrustumPoints(): Vector4f[];
    isVisible(bb: AABB): boolean;
    offset(offset: number): Frustum;
    offsetToFullyIncludeCameraCube(cubeSize: number): Frustum;
    pointInFrustum(x: number, y: number, z: number): boolean;
    prepare(camX: number, camY: number, camZ: number): void;
    set(frustum: Frustum): void;
    sodium$createViewport(): Viewport;
}