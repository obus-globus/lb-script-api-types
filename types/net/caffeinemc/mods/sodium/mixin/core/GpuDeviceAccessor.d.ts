import type { GpuDeviceBackend } from '../../../../../../com/mojang/blaze3d/systems/GpuDeviceBackend.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface GpuDeviceAccessor extends Object{
    sodium$getBackend(): GpuDeviceBackend;
}