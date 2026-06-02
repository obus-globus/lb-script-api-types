import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WLBindWaylandDisplay extends Object {
    static eglBindWaylandDisplayWL(paramarg0: number, paramarg1: number): boolean;
    static eglQueryWaylandBufferWL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): boolean;
    static eglQueryWaylandBufferWL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): boolean;
    static eglUnbindWaylandDisplayWL(paramarg0: number, paramarg1: number): boolean;
    static neglQueryWaylandBufferWL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}