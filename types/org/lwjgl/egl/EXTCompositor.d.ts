import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTCompositor extends Object {
    static EGL_COMPOSITOR_DROP_NEWEST_FRAME_EXT: number;
    static EGL_COMPOSITOR_KEEP_NEWEST_FRAME_EXT: number;
    static EGL_EXTERNAL_REF_ID_EXT: number;
    static EGL_PRIMARY_COMPOSITOR_CONTEXT_EXT: number;
    static eglCompositorBindTexWindowEXT(paramarg0: number): boolean;
    static eglCompositorSetContextAttributesEXT(paramarg0: number, paramarg1: number[]): boolean;
    static eglCompositorSetContextAttributesEXT(paramarg0: number, paramarg1: IntBuffer): boolean;
    static eglCompositorSetContextListEXT(paramarg0: number[]): boolean;
    static eglCompositorSetContextListEXT(paramarg0: IntBuffer): boolean;
    static eglCompositorSetSizeEXT(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static eglCompositorSetWindowAttributesEXT(paramarg0: number, paramarg1: number[]): boolean;
    static eglCompositorSetWindowAttributesEXT(paramarg0: number, paramarg1: IntBuffer): boolean;
    static eglCompositorSetWindowListEXT(paramarg0: number, paramarg1: number[]): boolean;
    static eglCompositorSetWindowListEXT(paramarg0: number, paramarg1: IntBuffer): boolean;
    static eglCompositorSwapPolicyEXT(paramarg0: number, paramarg1: number): boolean;
    static neglCompositorSetContextAttributesEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglCompositorSetContextListEXT(paramarg0: number, paramarg1: number): number;
    static neglCompositorSetWindowAttributesEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglCompositorSetWindowListEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}