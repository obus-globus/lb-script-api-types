import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRStreamCrossProcessFD extends Object {
    static EGL_NO_FILE_DESCRIPTOR_KHR: number;
    static eglCreateStreamFromFileDescriptorKHR(paramarg0: number, paramarg1: number): number;
    static eglGetStreamFileDescriptorKHR(paramarg0: number, paramarg1: number): number;
    constructor()
}