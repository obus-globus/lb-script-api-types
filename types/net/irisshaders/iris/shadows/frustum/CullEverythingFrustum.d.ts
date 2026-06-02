import type { Viewport } from '../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { ViewportProvider } from '../../../../../net/caffeinemc/mods/sodium/client/render/viewport/ViewportProvider.d.ts'
import type { Frustum } from '../../../../../net/caffeinemc/mods/sodium/client/render/viewport/frustum/Frustum.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vector3d } from '../../../../../org/joml/Vector3d.d.ts'
export class CullEverythingFrustum extends Frustum implements ViewportProvider, Frustum {
    static OFFSET_STEP: number;
    constructor()
    // private position: Vector3d;
    canDetermineInvisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    intersectAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    isVisible(arg0: AABB): boolean;
    prepare(arg0: number, arg1: number, arg2: number): void;
    sodium$createViewport(): Viewport;
    testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    testSection(arg0: number, arg1: number, arg2: number): boolean;
    testSectionExpanded(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
}