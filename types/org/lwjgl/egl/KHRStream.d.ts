import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRStream extends Object {
    static EGL_BAD_STATE_KHR: number;
    static EGL_BAD_STREAM_KHR: number;
    static EGL_CONSUMER_FRAME_KHR: number;
    static EGL_CONSUMER_LATENCY_USEC_KHR: number;
    static EGL_NO_STREAM_KHR: number;
    static EGL_PRODUCER_FRAME_KHR: number;
    static EGL_STREAM_STATE_CONNECTING_KHR: number;
    static EGL_STREAM_STATE_CREATED_KHR: number;
    static EGL_STREAM_STATE_DISCONNECTED_KHR: number;
    static EGL_STREAM_STATE_EMPTY_KHR: number;
    static EGL_STREAM_STATE_KHR: number;
    static EGL_STREAM_STATE_NEW_FRAME_AVAILABLE_KHR: number;
    static EGL_STREAM_STATE_OLD_FRAME_AVAILABLE_KHR: number;
    static eglCreateStreamKHR(paramarg0: number, paramarg1: number[]): number;
    static eglCreateStreamKHR(paramarg0: number, paramarg1: IntBuffer): number;
    static eglDestroyStreamKHR(paramarg0: number, paramarg1: number): boolean;
    static eglQueryStreamKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): boolean;
    static eglQueryStreamKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): boolean;
    static eglQueryStreamu64KHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: LongBuffer): boolean;
    static eglQueryStreamu64KHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): boolean;
    static eglStreamAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static neglCreateStreamKHR(paramarg0: number, paramarg1: number): number;
    static neglQueryStreamKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static neglQueryStreamu64KHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}