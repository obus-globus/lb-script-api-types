import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class NVStreamConsumerEGLImage extends Object {
    static EGL_STREAM_CONSUMER_IMAGE_NV: number;
    static EGL_STREAM_IMAGE_ADD_NV: number;
    static EGL_STREAM_IMAGE_AVAILABLE_NV: number;
    static EGL_STREAM_IMAGE_REMOVE_NV: number;
    static eglQueryStreamConsumerEventNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: PointerBuffer): number;
    static eglQueryStreamConsumerEventNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: PointerBuffer): number;
    static eglStreamAcquireImageNV(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer, paramarg3: number): boolean;
    static eglStreamImageConsumerConnectNV(paramarg0: number, paramarg1: number, paramarg2: LongBuffer, paramarg3: PointerBuffer): boolean;
    static eglStreamImageConsumerConnectNV(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: PointerBuffer): boolean;
    static eglStreamReleaseImageNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static neglQueryStreamConsumerEventNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static neglStreamAcquireImageNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static neglStreamImageConsumerConnectNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    constructor()
}