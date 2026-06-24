import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../../../../../net/minecraft/client/Camera.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class AsyncCameraTimingControl extends Object {
    constructor()
    // private isSyncRendering: boolean;
    // private previousPosition: Vec3;
    getShouldRenderSync(arg0: Camera): boolean;
}