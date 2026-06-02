import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class KHRStreamAttrib extends Object {
    static eglCreateStreamAttribKHR(paramarg0: number, paramarg1: PointerBuffer): number;
    static eglQueryStreamAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: PointerBuffer): boolean;
    static eglSetStreamAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static eglStreamConsumerAcquireAttribKHR(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static eglStreamConsumerReleaseAttribKHR(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static neglCreateStreamAttribKHR(paramarg0: number, paramarg1: number): number;
    static neglQueryStreamAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static neglStreamConsumerAcquireAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglStreamConsumerReleaseAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}