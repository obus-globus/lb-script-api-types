import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class WinBase extends Object {
    static FALSE: number;
    static TRUE: number;
    static FreeLibrary(paramarg0: IntBuffer, paramarg1: number): boolean;
    static GetLastError(): number;
    static GetModuleFileName(paramarg0: IntBuffer, paramarg1: number, paramarg2: ByteBuffer): number;
    static GetModuleFileName(paramarg0: IntBuffer, paramarg1: number, paramarg2: number): string;
    static GetModuleHandle(paramarg0: IntBuffer, paramarg1: CharSequence): number;
    static GetModuleHandle(paramarg0: IntBuffer, paramarg1: ByteBuffer): number;
    static GetProcAddress(paramarg0: IntBuffer, paramarg1: number, paramarg2: CharSequence): number;
    static GetProcAddress(paramarg0: IntBuffer, paramarg1: number, paramarg2: ByteBuffer): number;
    static LoadLibrary(paramarg0: IntBuffer, paramarg1: CharSequence): number;
    static LoadLibrary(paramarg0: IntBuffer, paramarg1: ByteBuffer): number;
    static LocalFree(paramarg0: IntBuffer, paramarg1: number): number;
    static nFreeLibrary(paramarg0: number, paramarg1: number): number;
    static nGetModuleFileName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nGetModuleHandle(paramarg0: number, paramarg1: number): number;
    static nGetProcAddress(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nLoadLibrary(paramarg0: number, paramarg1: number): number;
    static nLocalFree(paramarg0: number, paramarg1: number): number;
    constructor()
}