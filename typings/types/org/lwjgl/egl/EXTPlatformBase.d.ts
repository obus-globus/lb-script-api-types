import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTPlatformBase extends Object {
    static eglCreatePlatformPixmapSurfaceEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): number;
    static eglCreatePlatformPixmapSurfaceEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): number;
    static eglCreatePlatformWindowSurfaceEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): number;
    static eglCreatePlatformWindowSurfaceEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): number;
    static eglGetPlatformDisplayEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static eglGetPlatformDisplayEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    static neglCreatePlatformPixmapSurfaceEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static neglCreatePlatformWindowSurfaceEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static neglGetPlatformDisplayEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}