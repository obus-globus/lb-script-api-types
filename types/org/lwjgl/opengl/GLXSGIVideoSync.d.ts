import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GLXSGIVideoSync extends Object {
    static glXGetVideoSyncSGI(paramarg0: number[]): number;
    static glXGetVideoSyncSGI(paramarg0: IntBuffer): number;
    static glXWaitVideoSyncSGI(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static glXWaitVideoSyncSGI(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    static nglXGetVideoSyncSGI(paramarg0: number): number;
    static nglXWaitVideoSyncSGI(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}