import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class NVNativeQuery extends Object {
    static eglQueryNativeDisplayNV(paramarg0: number, paramarg1: PointerBuffer): boolean;
    static eglQueryNativePixmapNV(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static eglQueryNativeWindowNV(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static neglQueryNativeDisplayNV(paramarg0: number, paramarg1: number): number;
    static neglQueryNativePixmapNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglQueryNativeWindowNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}