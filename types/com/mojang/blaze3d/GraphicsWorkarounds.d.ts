import type { GpuDevice } from '../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { WeakReference } from '../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GraphicsWorkarounds extends Object {
    static get(paramgpuDevice: GpuDevice): GraphicsWorkarounds;
    private constructor(gpuDevice: GpuDevice)
    // private alwaysCreateFreshImmediateBuffer: boolean;
    // private gpuDevice: WeakReference<GpuDevice>;
    // private isAmd: boolean;
    // private isGlOnDx12: boolean;
    alwaysCreateFreshImmediateBuffer(): boolean;
    isAmd(): boolean;
    isGlOnDx12(): boolean;
}