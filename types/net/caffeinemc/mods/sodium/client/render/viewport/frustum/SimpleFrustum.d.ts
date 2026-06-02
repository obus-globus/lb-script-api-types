import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Frustum } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/frustum/Frustum.d.ts'
import type { FrustumIntersection } from '../../../../../../../../org/joml/FrustumIntersection.d.ts'
export class SimpleFrustum extends Object implements Frustum {
    constructor(arg0: FrustumIntersection)
    // private frustum: FrustumIntersection;
    // private negNxW: number;
    // private negNyW: number;
    // private negNzW: number;
    // private negPxW: number;
    // private negPyW: number;
    // private negPzW: number;
    // private nxX: number;
    // private nxY: number;
    // private nxZ: number;
    // private nyX: number;
    // private nyY: number;
    // private nyZ: number;
    // private nzX: number;
    // private nzY: number;
    // private nzZ: number;
    // private pxX: number;
    // private pxY: number;
    // private pxZ: number;
    // private pyX: number;
    // private pyY: number;
    // private pyZ: number;
    // private pzX: number;
    // private pzY: number;
    // private pzZ: number;
    intersectAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    testSection(arg0: number, arg1: number, arg2: number): boolean;
    testSectionExpanded(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
}