import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MESADRMImage extends Object {
    static EGL_DRM_BUFFER_FORMAT_ARGB32_MESA: number;
    static EGL_DRM_BUFFER_FORMAT_MESA: number;
    static EGL_DRM_BUFFER_MESA: number;
    static EGL_DRM_BUFFER_STRIDE_MESA: number;
    static EGL_DRM_BUFFER_USE_MESA: number;
    static EGL_DRM_BUFFER_USE_SCANOUT_MESA: number;
    static EGL_DRM_BUFFER_USE_SHARE_MESA: number;
    static eglCreateDRMImageMESA(paramarg0: number, paramarg1: number[]): number;
    static eglCreateDRMImageMESA(paramarg0: number, paramarg1: IntBuffer): number;
    static eglExportDRMImageMESA(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[]): boolean;
    static eglExportDRMImageMESA(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer): boolean;
    static neglCreateDRMImageMESA(paramarg0: number, paramarg1: number): number;
    static neglExportDRMImageMESA(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    constructor()
}