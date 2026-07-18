import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rect } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Rect.d.ts'
import type { Vec3f } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { Line } from '../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec2 } from '../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
/**
 * This util should only be called from main thread
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/WorldToScreen.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/WorldToScreen.kt:42}
 */
export class WorldToScreen extends Object {
    static INSTANCE: WorldToScreen;
    static calculateMouseRay(paramarg0: Vec2): Line;
    static calculateMouseRay(posOnScreen: Vec2, cameraPos: Vec3): Line;
    /**
     * @see GameRenderer.projectPointToScreen
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/WorldToScreen.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/WorldToScreen.kt:60}
     */
    static calculateScreenPos(paramarg0: Vec3): Vec3f;
    static calculateScreenPos(pos: Vec3, cameraPos: Vec3): Vec3f | null;
    static calculateScreenRect(paramarg0: AABB): Rect;
    static calculateScreenRect(box: AABB, cameraPos: Vec3): Rect | null;
    static setMatrices(projectionMatrix: Matrix4fc, modelViewMatrix: Matrix4fc, cameraPos: Vec3): void;
    // private cacheMat4f: Matrix4f;
    // private cacheVec3f: Vector3f;
    // private cacheVec4f: Vector4f;
    // private cachedCameraPos: Vec3;
    // private projModelViewMatrix: Matrix4f;
    calculateMouseRay(posOnScreen: Vec2, cameraPos?: Vec3): Line;
    calculateScreenPos(pos: Vec3, cameraPos?: Vec3): Vec3f | null;
    calculateScreenRect(box: AABB, cameraPos?: Vec3): Rect | null;
    setMatrices(projectionMatrix: Matrix4fc, modelViewMatrix: Matrix4fc, cameraPos: Vec3): void;
}