import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRStreamConsumerGLTexture extends Object {
    static EGL_CONSUMER_ACQUIRE_TIMEOUT_USEC_KHR: number;
    static eglStreamConsumerAcquireKHR(paramarg0: number, paramarg1: number): boolean;
    static eglStreamConsumerGLTextureExternalKHR(paramarg0: number, paramarg1: number): boolean;
    static eglStreamConsumerReleaseKHR(paramarg0: number, paramarg1: number): boolean;
    constructor()
}