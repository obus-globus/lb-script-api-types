import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { GPU_DEVICE } from '../../../org/lwjgl/opengl/GPU_DEVICE.d.ts'
export class WGLNVGPUAffinity extends Object {
    static ERROR_INCOMPATIBLE_AFFINITY_MASKS_NV: number;
    static ERROR_MISSING_AFFINITY_MASK_NV: number;
    static nwglCreateAffinityDCNV(paramarg0: number): number;
    static nwglEnumGpuDevicesNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglEnumGpusFromAffinityDCNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglEnumGpusNV(paramarg0: number, paramarg1: number): number;
    static wglCreateAffinityDCNV(paramarg0: PointerBuffer): number;
    static wglDeleteDCNV(paramarg0: number): boolean;
    static wglEnumGpuDevicesNV(paramarg0: number, paramarg1: number, paramarg2: GPU_DEVICE): boolean;
    static wglEnumGpusFromAffinityDCNV(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static wglEnumGpusNV(paramarg0: number, paramarg1: PointerBuffer): boolean;
    constructor()
}