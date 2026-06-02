import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { EGLDebugMessageKHRCallbackI } from '../../../org/lwjgl/egl/EGLDebugMessageKHRCallbackI.d.ts'
export class KHRDebug extends Object {
    static EGL_DEBUG_CALLBACK_KHR: number;
    static EGL_DEBUG_MSG_CRITICAL_KHR: number;
    static EGL_DEBUG_MSG_ERROR_KHR: number;
    static EGL_DEBUG_MSG_INFO_KHR: number;
    static EGL_DEBUG_MSG_WARN_KHR: number;
    static EGL_OBJECT_CONTEXT_KHR: number;
    static EGL_OBJECT_DISPLAY_KHR: number;
    static EGL_OBJECT_IMAGE_KHR: number;
    static EGL_OBJECT_STREAM_KHR: number;
    static EGL_OBJECT_SURFACE_KHR: number;
    static EGL_OBJECT_SYNC_KHR: number;
    static EGL_OBJECT_THREAD_KHR: number;
    static eglDebugMessageControlKHR(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void, paramarg1: PointerBuffer): number;
    static eglLabelObjectKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static eglQueryDebugKHR(paramarg0: number, paramarg1: PointerBuffer): boolean;
    static neglDebugMessageControlKHR(paramarg0: number, paramarg1: number): number;
    static neglQueryDebugKHR(paramarg0: number, paramarg1: number): number;
    constructor()
}