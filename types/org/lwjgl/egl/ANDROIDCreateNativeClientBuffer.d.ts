import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ANDROIDCreateNativeClientBuffer extends Object {
    static EGL_NATIVE_BUFFER_USAGE_ANDROID: number;
    static EGL_NATIVE_BUFFER_USAGE_PROTECTED_BIT_ANDROID: number;
    static EGL_NATIVE_BUFFER_USAGE_RENDERBUFFER_BIT_ANDROID: number;
    static EGL_NATIVE_BUFFER_USAGE_TEXTURE_BIT_ANDROID: number;
    static eglCreateNativeClientBufferANDROID(paramarg0: number[]): number;
    static eglCreateNativeClientBufferANDROID(paramarg0: IntBuffer): number;
    static neglCreateNativeClientBufferANDROID(paramarg0: number): number;
    constructor()
}