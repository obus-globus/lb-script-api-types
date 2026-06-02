import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class KHRLockSurface3 extends Object {
    static EGL_BITMAP_ORIGIN_KHR: number;
    static EGL_BITMAP_PITCH_KHR: number;
    static EGL_BITMAP_PIXEL_ALPHA_OFFSET_KHR: number;
    static EGL_BITMAP_PIXEL_BLUE_OFFSET_KHR: number;
    static EGL_BITMAP_PIXEL_GREEN_OFFSET_KHR: number;
    static EGL_BITMAP_PIXEL_LUMINANCE_OFFSET_KHR: number;
    static EGL_BITMAP_PIXEL_RED_OFFSET_KHR: number;
    static EGL_BITMAP_PIXEL_SIZE_KHR: number;
    static EGL_BITMAP_POINTER_KHR: number;
    static EGL_FORMAT_RGBA_8888_EXACT_KHR: number;
    static EGL_FORMAT_RGBA_8888_KHR: number;
    static EGL_FORMAT_RGB_565_EXACT_KHR: number;
    static EGL_FORMAT_RGB_565_KHR: number;
    static EGL_LOCK_SURFACE_BIT_KHR: number;
    static EGL_LOCK_USAGE_HINT_KHR: number;
    static EGL_LOWER_LEFT_KHR: number;
    static EGL_MAP_PRESERVE_PIXELS_KHR: number;
    static EGL_MATCH_FORMAT_KHR: number;
    static EGL_OPTIMAL_FORMAT_BIT_KHR: number;
    static EGL_READ_SURFACE_BIT_KHR: number;
    static EGL_UPPER_LEFT_KHR: number;
    static EGL_WRITE_SURFACE_BIT_KHR: number;
    static eglLockSurfaceKHR(paramarg0: number, paramarg1: number, paramarg2: number[]): boolean;
    static eglLockSurfaceKHR(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): boolean;
    static eglQuerySurface64KHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: PointerBuffer): boolean;
    static eglUnlockSurfaceKHR(paramarg0: number, paramarg1: number): boolean;
    static neglLockSurfaceKHR(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglQuerySurface64KHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}