import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class WGLNVDXInterop extends Object {
    static WGL_ACCESS_READ_ONLY_NV: number;
    static WGL_ACCESS_READ_WRITE_NV: number;
    static WGL_ACCESS_WRITE_DISCARD_NV: number;
    static nwglDXLockObjectsNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglDXUnlockObjectsNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static wglDXCloseDeviceNV(paramarg0: number): boolean;
    static wglDXLockObjectsNV(paramarg0: number, paramarg1: PointerBuffer): boolean;
    static wglDXObjectAccessNV(paramarg0: number, paramarg1: number): boolean;
    static wglDXOpenDeviceNV(paramarg0: number): number;
    static wglDXRegisterObjectNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static wglDXSetResourceShareHandleNV(paramarg0: number, paramarg1: number): boolean;
    static wglDXUnlockObjectsNV(paramarg0: number, paramarg1: PointerBuffer): boolean;
    static wglDXUnregisterObjectNV(paramarg0: number, paramarg1: number): boolean;
    constructor()
}