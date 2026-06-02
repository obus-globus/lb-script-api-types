import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
export class FrustumHolder extends Object {
    constructor()
    readonly cullingInfo: string;
    readonly distanceInfo: string;
    readonly frustum: Frustum;
    getCullingInfo(): string;
    getDistanceInfo(): string;
    getFrustum(): Frustum;
    setInfo(arg0: Frustum, arg1: string, arg2: string): FrustumHolder;
}