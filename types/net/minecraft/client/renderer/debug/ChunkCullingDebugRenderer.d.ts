import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { DebugValueAccess } from '../../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
export class ChunkCullingDebugRenderer extends Object implements DebugRenderer$SimpleDebugRenderer {
    static DIRECTIONS: (Object | null)[];
    constructor(minecraft: Minecraft)
    // private minecraft: Minecraft;
    // private addFrustumLine(offset: Vec3, a: Vector4f, b: Vector4f): void;
    // private addFrustumQuad(offset: Vec3, frustumPoints: Vector4f[], i0: number, i1: number, i2: number, i3: number, r: number, g: number, b: number): void;
    emitGizmos(camX: number, camY: number, camZ: number, debugValues: DebugValueAccess, frustum: Frustum, partialTicks: number): void;
}