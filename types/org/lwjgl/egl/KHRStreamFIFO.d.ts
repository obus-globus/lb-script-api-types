import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRStreamFIFO extends Object {
    static EGL_STREAM_FIFO_LENGTH_KHR: number;
    static EGL_STREAM_TIME_CONSUMER_KHR: number;
    static EGL_STREAM_TIME_NOW_KHR: number;
    static EGL_STREAM_TIME_PRODUCER_KHR: number;
    static eglQueryStreamTimeKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: LongBuffer): boolean;
    static eglQueryStreamTimeKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): boolean;
    static neglQueryStreamTimeKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}